import { useEffect, useState } from "react";
import Card from "../../components/custom/Card"
import { db } from "../../lib/config/FirestoreConfig"
import { getDocs,collection } from "firebase/firestore";

const Announcements = () => {
  const [announcementsList, setAnnouncementsList] = useState([]);

  const announcementRef = collection(db, "announcement")

  const getInternshipList = async() => {
    try {
      const data = await getDocs(announcementRef)
      setAnnouncementsList(data.docs.map((doc) => ({
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
    console.log(announcementsList)
  },[announcementsList])

  
  return(
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto">
        <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
          {announcementsList.map((announcement,idx) => (
            <Card key={idx} classname="bg-[#958AAA] text-black" text={announcement.text} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Announcements