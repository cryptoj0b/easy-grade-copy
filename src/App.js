import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BrowseForm from './BrowseForm';
import Footer from './Footer';
import HomePage from './HomePage';
import LoginBox from './LoginBox';
import SignupEN from './SignUpEn';
import LoginPageEn from './LoginPageEn';
import DashboardEN from './dashboardEN';
import DashboardAR from './dashboardAR';
import HomePageAR from './HomePageAR';
import LoginPageAR from './LoginPageAR';
import SignupAR from './SignUpAR';
import TeacherOrStudent from './TorS';
import TeacherOrStudentAR from './TorSAR';
import NewPasswordPageEN from './NewPasswordPageEN';
import NewPasswordPageAR from './NewPasswordPageAR';
import { UserProvider } from './UserContext'; // Ensure this path matches where you created the UserContext file

function App() {
  return (
    <UserProvider> {/* Wrap Router in UserProvider to make user context available globally */}
      <Router>
        <Routes>
          <Route path="/" element={<DashboardEN/>} />
          <Route path="/login" element={<LoginPageEn/>} />
          <Route path="/signup" element={<SignupEN/>} />
          <Route path='/Home' element={<HomePage/>} />
          <Route path='/dashboard-ar' element={<DashboardAR/>}/>
          <Route path='/Home-ar' element={<HomePageAR/>}/>
          <Route path='/login-ar' element={<LoginPageAR/>}/>
          <Route path='/signup-ar' element={<SignupAR/>}/>
          <Route path='/teacher-or-student' element={<TeacherOrStudent/>}/>
          <Route path='/teacher-or-student-ar' element={<TeacherOrStudentAR/>}/>
          <Route path='/create-new-password-en' element={<NewPasswordPageEN/>}/>
          <Route path='/create-new-password-ar' element={<NewPasswordPageAR/>}/>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
