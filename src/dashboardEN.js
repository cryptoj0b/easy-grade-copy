import React from 'react';
import Footer from './Footer';
import gradeLogo from './grade_1.png';
import logo from './easygradepfp.png';
export default function DashboardEN() {
  document.body.style.backgroundColor = "#f3fbfb";
    document.body.style.display = 'flex';
    document.body.style.paddingTop = "150px";
    const loginUrl = "https://1.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=1mf5ato0bus8fk929eeau6rogf&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmaster.d3dywdz0zlcr7c.amplifyapp.com%2Fhome";
    const handleLogin = () => {
        window.location.href = loginUrl; 
    };
    const handleSignUp = () => {
        window.location.href = loginUrl; 
    };

    return (
    return  (        
        <>
            {/* Navigation and other content */}
            <nav className="container2">
                {/* ... */}
                {/* ... navigation content ... */}
            </nav>

            {/* Main content */}
            {/* ... */}
            <div className='flex w-screen'>
                <img src={gradeLogo} className='ml-4 sm:ml-[5vw] w-[90%]' alt="Grade Logo"></img>
            </div>

            <p className='text-[4vw] lg:text-2xl max-w-[80%] pl-5 mx-auto text-darkBlue font-Tajawal text-center' style={{ marginTop: "10vh" }}>
                Welcome to Easy Grade, where our GPT-powered tool is revolutionizing the grading process, combining efficiency & detailed analysis to transform the way writing assignments are assessed.
            </p>

            <p className='text-[4vw] lg:text-2xl max-w-[80%] pl-5 lg:pl-0 mx-auto text-darkBlue pb-10vh font-Tajawal text-center'>
                By providing instant, comprehensive feedback, we are dedicated to enhancing educational outcomes and empowering tutors; enabling them to focus on fostering student success and excellence.
            </p>

            {/* Login and Sign Up buttons */}
            <div className='w-full inline-flex justify-center mt-[10vh] '>
                {/* Changed onClick to handleLogin */}
                <button className='dashboard-button rounded-lg w-[140px] sm:w-[200px] h-[50px] text-[20px] text-darkBlue pb-[5px] bg-whiter mr-[5vw] border-[2px] border-lighterBlue' onClick={handleLogin}>
            <div className='w-full inline-flex justify-center mt-[10vh]'>
                {/* Redirect to the login URL when the login button is clicked */}
                <button className='dashboard-button rounded-lg w-[140px] sm:w-[200px] h-[50px] text-[20px] text-darkBlue pb-[5px] bg-whiter mr-[5vw] border-[2px] border-lighterBlue' onClick={redirectToLogin}>
                    login
                </button>
                {/* Changed onClick to handleSignUp */}
                <button className='dashboard-button ml-[5vw] rounded-lg w-[140px] sm:w-[200px] h-[50px] text-[20px] text-darkBlue pb-[5px] bg-whiter border-[2px] border-lighterBlue' onClick={handleSignUp}>
                {/* Redirect to the sign-up URL when the sign-up button is clicked */}
                <button className='dashboard-button ml-[5vw] rounded-lg w-[140px] sm:w-[200px] h-[50px] text-[20px] text-darkBlue pb-[5px] bg-whiter border-[2px] border-lighterBlue' onClick={redirectToSignUp}>
                    sign up
                </button>
            </div>

            {/* Footer */}
            <Footer />
            <Footer />  
        </>
    );
}
