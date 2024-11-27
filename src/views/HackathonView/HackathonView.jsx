import { useEffect, useState } from "react";
import Card from "../../components/custom/Card"
import { useNavigate } from "react-router-dom";
import { db } from "../../lib/config/FirestoreConfig"
import { getDocs,collection } from "firebase/firestore";

const HackathonView = () => {

  const [hackathonList, setHackathonList] = useState([]);

  const hackathonRef = collection(db, "Hackathon")

  const getInternshipList = async() => {
    try {
      const data = await getDocs(hackathonRef)
      setHackathonList(data.docs.map((doc) => ({
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
    console.log(hackathonList)
  },[hackathonList])

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/hackathons/${id}`);
  };


  return(
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto">
        <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
          {hackathonList.map((hackathon) => (
            <Card key={hackathon.hackathon_id} classname="bg-[#FE6219] text-black" text={hackathon.title} onClick={() => handleCardClick(hackathon.hackathon_id)} />
          ))}
        </div>

      </div>
    </>
  )
}

export default HackathonView
