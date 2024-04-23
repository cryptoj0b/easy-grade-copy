import React from 'react';
import gradeLogo from './grade_1.png';
import Footer from './Footer';
import './fonts.css';
import './App.css';
import './header.css';
import logo from './easygradepfp.png';

export default function DashboardEN() {
    document.body.style.backgroundColor = "#f3fbfb";
    document.body.style.display = 'flex';
    document.body.style.paddingTop = "150px";

    const loginUrl = "https://inf.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=24po8h2hhguqkjh1ial0sqve7f&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fmaster.d3dywdz0zlcr7c.amplifyapp.com%2Fhome";

    // Function to redirect to the login URL
    const redirectToLogin = () => {
        window.location.href = loginUrl;
    };

    // Function to redirect to the signup URL (Currently set to the same as login for demonstration)
    const redirectToSignUp = () => {
        window.location.href = loginUrl;
    };

    return (
        <>
            <nav className="container2">
                {/* Navigation content would go here */}
            </nav>
            <div className='flex w-screen'>
                <img src={gradeLogo} className='ml-4 sm:ml-[5vw] w-[90%]' alt="Grade Logo"></img>
            </div>
            <p className='text-[4vw] lg:text-2xl max-w-[80%] pl-5 mx-auto text-darkBlue font-Tajawal text-center' style={{ marginTop: "10vh" }}>
                Welcome to Easy Grade, where our GPT-powered tool is revolutionizing the grading process, combining efficiency & detailed analysis to transform the way writing assignments are assessed.
            </p>
            <p className='text-[4vw] lg:text-2xl max-w-[80%] pl-5 lg:pl-0 mx-auto text-darkBlue pb-10vh font-Tajawal text-center'>
                By providing instant, comprehensive feedback, we are dedicated to enhancing educational outcomes and empowering tutors; enabling them to focus on fostering student success and excellence.
            </p>
            <div className='w-full inline-flex justify-center mt-[10vh]'>
                <button className='dashboard-button rounded-lg w-[140px] sm:w-[200px] h-[50px] text-[20px] text-darkBlue pb-[5px] bg-whiter mr-[5vw] border-[2px] border-lighterBlue' onClick={redirectToLogin}>
                    login
                </button>
                <button className='dashboard-button ml-[5vw] rounded-lg w-[140px] sm:w-[200px] h-[50px] text-[20px] text-darkBlue pb-[5px] bg-whiter border-[2px] border-lighterBlue' onClick={redirectToSignUp}>
                    sign up
                </button>
            </div>
            <Footer />
        </>
    );
}
