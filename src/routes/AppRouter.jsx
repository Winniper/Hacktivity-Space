import {Route, Routes} from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import Layout from '../components/shared/Layout'
import HackathonPage from '../pages/HackathonPage/HackathonPage'
import InternshipPage from '../pages/InternshipPage/InternshipPage'
import Page404 from '../pages/Page404/Page404'
import ProfilePage from '../pages/ProfilePage/ProfilePage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route element={<Layout/>}>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/hackathons' element={<HackathonPage/>}/>
          <Route path='/internships' element={<InternshipPage/>}/>
          <Route path='*' element={<Page404/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter