import TypewriterView from "../../views/TypeWriterView/TypewriterView"
import { useNavigate } from "react-router-dom"


const LandingPageContainer = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/login')
    }
    
    return(
        <TypewriterView onClick={handleClick}/>
    )
}

export default LandingPageContainer