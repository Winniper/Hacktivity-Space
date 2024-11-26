import React, { useState } from 'react'
import Card from '../../components/custom/Card';
import CustomButton from '../../components/base/CustomButton';


//it is temporary initialisation for the internships
const initializeInternships = () => {
    const tempArray = [];
    for (let i = 0; i < 10; i++) {
      tempArray.push({
        id: i,
        title: `SWE at Meta${i}`,
        description: `This is a description of the internship at Meta${i} lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  fugiat nulla pariatur.`,
        apply_link: 'http://localhost:5173/home',
        last_date: '2022-12-12',
      });
    }
  
    return tempArray;
  };

const CmsIntern = () => {

    const [internships, setInternships] = useState(initializeInternships);
  
    const handleDelete = (id) => {
        const updatedInternships = internships.filter((internship) => internship.id !== id);
        setInternships(updatedInternships);
      };
    
      // Function to display an internship card
      const displayCard = (internship) => {
        return (
            <div key={internship.id} className="relative space-y-4">
            <Card key={internship.id} classname="bg-[#FAE932] text-black" text={internship.title} onClick={() => handleCardClick(internship.id)}/>
             <CustomButton variant="secondary" onClick={() =>handleDelete(internship.id)}>DELETE ↑</CustomButton>
          </div>
        );
      };
    
      const displayInternships = internships.map((internship) => {
        return (displayCard(internship));
      });


  return (
    <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto">
        <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
          {displayInternships}
        </div>
      </div>
  )
}

export default CmsIntern