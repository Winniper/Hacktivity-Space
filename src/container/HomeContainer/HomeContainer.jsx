import { useNavigate } from 'react-router-dom'
import HomeView from '../../views/HomeView/HomeView'

const HomeContainer = () => {
    const navigate = useNavigate()
    const handleClick = (path) => {
        navigate(`/${path}`)
    }

  return (
    <HomeView onClick={handleClick}/>
  )
}

export default HomeContainer