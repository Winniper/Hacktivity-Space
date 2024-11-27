import { useEffect, useState } from "react";
import Card from "../../components/custom/Card"
import { useNavigate } from "react-router-dom";
import { db } from "../../lib/config/FirestoreConfig"
import { getDocs,collection } from "firebase/firestore";

const InternshipView = () => {

  const [internshipsList, setInternshipsList] = useState([]);

  const internshipRef = collection(db, "internship")

  const getInternshipList = async() => {
    try {
      const data = await getDocs(internshipRef)
      setInternshipsList(data.docs.map((doc) => ({
        ...doc.data()
      })));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getInternshipList()
  },[])

  useEffect(()=>{
    console.log(internshipsList)
  },[internshipsList])

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/internships/${id}`);
  };

  return(
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto">
        <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
          {internshipsList.map((internship) => (
            <Card key={internship.internship_id} classname="bg-[#FAE932] text-black" text={internship.name} onClick={() => handleCardClick(internship.internship_id)} />
          ))}
        </div>
      </div>
    </>
  )
}

export default InternshipView
