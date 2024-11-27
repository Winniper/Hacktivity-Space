import CustomButton from "../../components/base/CustomButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../lib/config/FirestoreConfig";
import { getDocs, collection } from "firebase/firestore";
import clsx from "clsx";

const cardStyles =
  "bg-[#082f49] flex flex-col items-center font-poppins text-white text-sm transition-all shadow-[3px_3px_0px_black] hover:shadow-none active:scale-95 p-0 sm:p-6 md:p-8 rounded-3xl";

const HackathonDetail = () => {
  const [internshipsList, setInternshipsList] = useState([]);
  const internshipRef = collection(db, "internship");
  const navigate = useNavigate()

  const getInternshipList = async () => {
    try {
      const data = await getDocs(internshipRef);
      setInternshipsList(
        data.docs.map((doc) => {
          const internshipData = doc.data();
          return {
            ...internshipData,
            last_date: internshipData.last_date?.toDate().toLocaleDateString(), // Convert timestamp
            id: doc.id, // Add unique ID
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInternshipList();
  }, []);


    const handleJoin = () => {}
    const handleCreate = () => {
        navigate("/createteam")
    }
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto ">
      <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
        {internshipsList.map((internship) => (
          <div key={internship.id} className={clsx(cardStyles)}>
            <div className="text-3xl">
              <h2>{internship.name}</h2>
            </div>
            <div>
              <span>{internship.description}</span>
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
              <span className="text-red-500">Last date: {internship.last_date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonDetail;
