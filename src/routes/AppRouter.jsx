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
import HackathonDetail from '../pages/HackathonDetailPage/HackathonDetail'
import CreateTeamPage from '../pages/CreateTeamPage/CreateTeamPage'
import Cms from '../pages/Cms/Cms'
import CmsIntern from '../pages/Cms/CmsIntern'
import PostHackathons from '../pages/PostItems/PostHackathons'
import CmsAnnouncements from '../pages/Cms/CmsAnnouncements'
import Announcements from '../pages/AnnouncementPage/Announcements'


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/announcement' element={<Announcements />} />
        <Route path='/cms' element={<Cms />} />
        <Route path='/cms/internships' element={<CmsIntern />} />
        <Route path='/cms/announcement' element={<CmsAnnouncements />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/hackathons' element={<HackathonPage />} />
        <Route path="/post/hackathons/" element={<PostHackathons />} />
        <Route path='/internships' element={<InternshipPage />} />
        <Route path="/internships/:id" element={<InternshipDetails />} />
        <Route path="/hackathons/:id" element={<HackathonDetail />} />
        <Route path="/createteam" element={<CreateTeamPage />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default AppRouter