import CustomButton from "../../components/base/CustomButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../lib/config/FirestoreConfig";
import { getDocs, collection } from "firebase/firestore";


const HackathonDetail = () => {
  const [hackathonList, setHackathonList] = useState([]);
  const hackathonRef = collection(db, "Hackathon");
  const navigate = useNavigate()

  const getHackathonList = async () => {
    try {
      const data = await getDocs(hackathonRef);
      setHackathonList(
        data.docs.map((doc) => {
          const internshipData = doc.data();
          return {
            ...internshipData,
            id: doc.id, // Add unique ID
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHackathonList();
  }, []);


    const handleJoin = () => {}
    const handleCreate = () => {
        navigate("/createteam")
    }
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto ">
      <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
        {hackathonList.map((hackathon) => (
          <div key={hackathon.id} className="bg-[#082f49] flex flex-col items-center gap-8 font-poppins text-white text-sm transition-all shadow-[3px_3px_0px_black] hover:shadow-none active:scale-95 p-0 sm:p-6 md:p-8 rounded-3xl">
            <div className="text-5xl">
              <h2>{hackathon.title}</h2>
            </div>
            <div>
              <span className="text-lg">{hackathon.description}</span>
            </div>
            <div className="flex justify-evenly w-full items-baseline">
              <CustomButton
                variant="primary"
                onClick={handleCreate}
              >
                CREATE A TEAM
              </CustomButton>
              <CustomButton
                variant="primary"
                onClick={handleJoin}
              >
                JOIN A TEAM
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonDetail;
