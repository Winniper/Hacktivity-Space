
import { useState } from "react";
import Card from "../../components/custom/Card"

import { useNavigate } from "react-router-dom";


//it is temporary initialisation for the internships
const initializeInternships = () => {
  const tempArray = [];
  for (let i = 0; i < 10; i++) {
    tempArray.push({
      id: i,
      tittle: `SWE at Meta${i}`,
      description: `This is a description of the internship at Meta${i} lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  fugiat nulla pariatur.`,
      apply_link: 'http://localhost:5173/home',
      last_date: '2022-12-12',
    });
  }

  return tempArray;
};

const InternshipView = () => {

  const [internships, setInternships] = useState(initializeInternships);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/internships/${id}`);
  };

  const displayCard = (internship) => {
    return (
      <Card key={internship.id} classname="bg-[#FAE932] text-black" text={internship.tittle} onClick={() => handleCardClick(internship.id)} />

    );
  }

  const displayInternships = internships.map((internship) => {
    return (displayCard(internship));
  });

  const updateInternships = () => {
    // fetch the data from the backend and update the internships
  }

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto">
        <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
          {displayInternships}

        </div>

      </div>

    </>
  )
}

export default InternshipView

{/* <Card classname="bg-[#FAE932] text-black" text="SWE at Meta" />
        <Card classname="bg-[#FAE932] text-black" text="Cloud engineer at Amazon" />
        <Card classname="bg-[#FAE932] text-black" text="React.js Developer at Netflix" />
        <Card classname="bg-[#FAE932] text-black" text="ML Engineer at Google" />
        <Card classname="bg-[#FAE932] text-black" text="SWE at Meta" />
        <Card classname="bg-[#FAE932] text-black" text="Cloud engineer at Amazon" />
        <Card classname="bg-[#FAE932] text-black" text="React.js Developer at Netflix" />
        <Card classname="bg-[#FAE932] text-black" text="ML Engineer at Google" /> */}