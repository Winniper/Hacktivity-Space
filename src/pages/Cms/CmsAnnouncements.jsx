import { useEffect, useState } from "react";
import Card from "../../components/custom/Card"
import CustomButton from "../../components/base/CustomButton";
import CustomInputField from "../../components/base/CustomInputField";
import { db } from "../../lib/config/FirestoreConfig"
import { getDocs,collection, addDoc, doc, deleteDoc } from "firebase/firestore";

const CmsAnnouncements = () => {
  const [announcementsList, setAnnouncementsList] = useState([]);
  const [text, setText] = useState("")

  const announcementRef = collection(db, "announcement")

  const getAnnouncementList = async() => {
    try {
      const data = await getDocs(announcementRef)
      setAnnouncementsList(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getAnnouncementList()
  },[])

  useEffect(()=>{
    console.log(announcementsList)
  },[announcementsList])

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async() => {
    try {
      const randomId = Math.floor(Math.random() * 1000000);
      await addDoc(announcementRef,{
        text: text,
        announcement_id: randomId
      })
      getAnnouncementList()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async(id) => {
    const announcementDoc = doc(db, "announcement", id)
    await deleteDoc(announcementDoc)
    getAnnouncementList()
  }

  return(
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto">
        <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
          <div className="bg-[#000] w-full h-screen flex items-center justify-center relative">
            <div className="bg-[#000] border rounded-lg p-6 sm:p-8 md:p-10 max-h-fit w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 flex flex-col gap-6 sm:gap-7 md:gap-9">
              <span className="text-white font-poppins font-bold text-xl sm:text-2xl md:text-3xl">Add Annoucement</span>
                <CustomInputField type={"text"} placeholder={"Enter the announcement..."} inputValue={text} onChange={handleText}/>
                <CustomButton variant={"primary"} onClick={handleSubmit}>Add</CustomButton>
            </div>
          </div>
        
          {announcementsList.map((announcement) => (
            <div key={announcement.announcement_id} className="flex flex-col gap-5">
              <Card classname="bg-[#FAE932] text-black" text={announcement.text} />
              <CustomButton variant="secondary" onClick={() => {handleDelete(announcement.id)}}>Delete</CustomButton>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default CmsAnnouncements