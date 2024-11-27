import { useState } from "react"
import CustomButton from "../../components/base/CustomButton"
import CustomInputField from "../../components/base/CustomInputField"
import { db } from "../../lib/config/FirestoreConfig"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const CreateTeamPage = () => {
    const [teamName, setTeamName] = useState("")
    const teamRef = collection(db, "team")

    const navigate = useNavigate()

    const handleName = (e) => {
        setTeamName(e.target.value)
    }

    const handleSubmit = async() => {
        try {
            await addDoc(teamRef,{
                hackathon_id: "1001",
                teamName: teamName,
                team_id: "101",
                team_leader_id: "01",
                team_members_id: [],
            })

            navigate("/profile", {state: {teamName}})
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="bg-[#000] w-full h-screen flex items-center justify-center relative">
      <div className="bg-[#000] border rounded-lg p-6 sm:p-8 md:p-10 max-h-fit w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-6 sm:gap-7 md:gap-9 relative z-10">
        <span className="text-white font-poppins font-bold text-xl sm:text-2xl md:text-3xl">Create Team</span>
        <CustomInputField type={"text"} placeholder={"Enter team name"} inputValue={teamName} onChange={handleName}/>
        <CustomButton variant={"primary"} onClick={handleSubmit}>Create Team</CustomButton>
      </div>
    </div>
  )
}

export default CreateTeamPage