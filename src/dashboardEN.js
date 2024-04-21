import React from 'react';
import Footer from './Footer';
import gradeLogo from './grade_1.png';
import logo from './easygradepfp.png';

export default function DashboardEN() {
  document.body.style.backgroundColor = "#f3fbfb";
    document.body.style.display = 'flex';
    document.body.style.paddingTop = "150px";
    const loginUrl = "https://1.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=1mf5ato0bus8fk929eeau6rogf&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmaster.d3dywdz0zlcr7c.amplifyapp.com%2Fhome";

    // Function to handle redirection
    const handleLogin = () => {
        window.location.href = loginUrl; // Redirect to the Cognito login URL
    };

    // Re-use the login function for signup for now
    // If you have a different URL for signup, replace `handleLogin` in the onClick for the signup button
    const handleSignUp = () => {
        window.location.href = loginUrl; 
    };

    return (
        <>
            {/* Navigation and other content */}
            <nav className="container2">
                {/* ... */}
            </nav>

            {/* Main content */}
            {/* ... */}

            {/* Login and Sign Up buttons */}
            <div className='w-full inline-flex justify-center mt-[10vh] '>
                {/* Changed onClick to handleLogin */}
                <button className='dashboard-button rounded-lg w-[140px] sm:w-[200px] h-[50px] text-[20px] text-darkBlue pb-[5px] bg-whiter mr-[5vw] border-[2px] border-lighterBlue' onClick={handleLogin}>
                    login
                </button>
                {/* Changed onClick to handleSignUp */}
                <button className='dashboard-button ml-[5vw] rounded-lg w-[140px] sm:w-[200px] h-[50px] text-[20px] text-darkBlue pb-[5px] bg-whiter border-[2px] border-lighterBlue' onClick={handleSignUp}>
                    sign up
                </button>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
