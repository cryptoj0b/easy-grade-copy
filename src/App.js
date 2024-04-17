import BrowseForm from './BrowseForm';
import Footer from './Footer';
import HomePage from './HomePage';
import LoginBox from './LoginBox';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import SignupEN from './SignUpEn';
import LoginPageEn from './LoginPageEn';
import DashboardEN from './dashboardEN';
import DashboardAR from './dashboardAR';
import logo from './easygradepfp.png';
import HomePageAR from './HomePageAR';
import LoginPageAR from './LoginPageAR';
import SignupAR from './SignUpAR';
import TeacherOrStudent from './TorS';
import TeacherOrStudentAR from './TorSAR';
import NewPasswordPageEN from './NewPasswordPageEN';
import NewPasswordPageAR from './NewPasswordPageAR';



function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<DashboardEN/>} />
      <Route path="/login" element={<LoginPageEn/>} />
      <Route path="/signup" element={<SignupEN/>} />
      <Route path='/Home' element= {<HomePage/>} />
      <Route path='/dashboard-ar' element = {<DashboardAR/>}/>
      <Route path='/Home-ar' element = {<HomePageAR/>}/>
      <Route path='/login-ar' element = {<LoginPageAR/>}/>
      <Route path='/signup-ar' element = {<SignupAR/>}/>
      <Route path='/teacher-or-student' element = {<TeacherOrStudent/>}/>
      <Route path='/teacher-or-student-ar' element = {<TeacherOrStudentAR/>}/>
      <Route path='/create-new-password-en' element = {<NewPasswordPageEN/>}/>
      <Route path='/create-new-password-ar' element = {<NewPasswordPageAR/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
