import CustomButton from "../../components/base/CustomButton";
import { useState, useEffect } from "react";
import { db } from "../../lib/config/FirestoreConfig";
import { getDocs, collection } from "firebase/firestore";


const InternshipDetails = () => {
  const [internshipsList, setInternshipsList] = useState([]);
  const internshipRef = collection(db, "internship");

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

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto ">
      <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
        {internshipsList.map((internship) => (
          <div key={internship.id} className="bg-[#082f49] flex flex-col items-center gap-8 font-poppins text-white text-sm transition-all shadow-[3px_3px_0px_black] hover:shadow-none active:scale-95 p-0 sm:p-6 md:p-8 rounded-3xl">
            <div className="text-5xl">
              <h2>{internship.name}</h2>
            </div>
            <div>
              <span className="texl-lg">{internship.description}</span>
            </div>
            <div className="flex justify-evenly w-full items-baseline">
              <CustomButton
                variant="primary"
                onClick={() => {window.open(internship.intershipURL)
                    console.log(internship.intershipURL)
                }}
              >
                APPLY HERE
              </CustomButton>
              <span className="text-red-500">Last date: {internship.last_date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipDetails;
