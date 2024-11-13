import {Route, Routes} from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import Layout from '../components/shared/Layout'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route element={<Layout/>}>
          <Route path='/home' element={<HomePage/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter