// import TypewriterView from "../../views/TypeWriterView/TypewriterView"
import { useNavigate } from "react-router-dom"


const LandingPageContainer = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/login')
    }
    
    return(
        <div className="h-screen flex items-center justify-center bg-[#000000] flex-col space-y-10">
        <Particle/>
      <span className="text-white text-3xl font-poppins tracking-tighter font-medium"><span className="text-[#3B82F6] text-3xl font-poppins">Hacktivity</span> Space</span>
      <TextAnimation/>
      <div className="flex space-x-6">
        <CustomButton variant={"primary"} onClick={onClick}>Login</CustomButton>
      </div>
    </div>
        // <TypewriterView onClick={handleClick}/>
    )
}

export default LandingPageContainer