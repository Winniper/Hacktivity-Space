import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import Layout from '../components/shared/Layout'
import HackathonPage from '../pages/HackathonPage/HackathonPage'
import InternshipPage from '../pages/InternshipPage/InternshipPage'
import Page404 from '../pages/Page404/Page404'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import InternshipDetails from '../views/InternshipView/InternshipDetails'
import Cms from '../pages/Cms/Cms'
import CmsIntern from '../pages/Cms/CmsIntern'
import PostHackathons from '../pages/PostItems/PostHackathons'


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/cms' element={<Cms />} />
        <Route path='/cms/internships' element={<CmsIntern />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/hackathons' element={<HackathonPage />} />
        <Route path="/post/hackathons/" element={<PostHackathons />} />
        <Route path='/internships' element={<InternshipPage />} />
        <Route path="/internships/:id" element={<InternshipDetails />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default AppRouter