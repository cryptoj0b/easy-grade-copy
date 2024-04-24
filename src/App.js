import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowseForm from './BrowseForm';
import Footer from './Footer';
import HomePage from './HomePage';
import LoginBox from './LoginBox';
import LoginPageEn from './LoginPageEn';
import DashboardEN from './dashboardEN';
import DashboardAR from './dashboardAR';
import HomePageAR from './HomePageAR';
import LoginPageAR from './LoginPageAR';
import TeacherOrStudent from './TorS';
import TeacherOrStudentAR from './TorSAR';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<DashboardEN />} />
          <Route path="/login" element={<LoginPageEn />} />
          <Route path="/login-teacher" element={<TeacherLoginPage />} />
          <Route path="/login-student" element={<StudentLoginPage />} /> */}
          <Route path="/Home" element={<HomePage />} />
          <Route path="/dashboard-ar" element={<DashboardAR />} />
          <Route path="/Home-ar" element={<HomePageAR />} />
          <Route path="/login-ar" element={<LoginPageAR />} />
          <Route path="/TeacherOrStudent" element={<TeacherOrStudent />} />
          <Route path="/TeacherOrStudentAR" element={<TeacherOrStudentAR />} />
        </Routes>
      </Router>
  );
}

export default App;
