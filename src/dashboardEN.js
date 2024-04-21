import gradeLogo from './grade_1.png';
import logo from './easygradepfp.png';

export default function DashboardEN() {
  document.body.style.backgroundColor = "#f3fbfb";
export default function DashboardEN(){
    document.body.style.backgroundColor = "#f3fbfb";
    document.body.style.display = 'flex';
    document.body.style.paddingTop = "150px";

    const loginUrl = "https://1.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=1mf5ato0bus8fk929eeau6rogf&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmaster.d3dywdz0zlcr7c.amplifyapp.com%2Fhome";

    // Function to handle redirection
    const handleLogin = () => {
    // Function to redirect to the login URL
    const redirectToLogin = () => {
        window.location.href = loginUrl; // Redirect to the Cognito login URL
    };

    // Re-use the login function for signup for now
    // If you have a different URL for signup, replace `handleLogin` in the onClick for the signup button
    const handleSignUp = () => {
    // Function to redirect to the signup URL
    const redirectToSignUp = () => {
        window.location.href = loginUrl; 
    };

    return  (        
    return (        
        <>
            <nav className="container2">
                {/* ... navigation content ... */}
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
                {/* Redirect to the login URL when the login button is clicked */}
                <button className='dashboard-button rounded-lg w-[140px] sm:w-[200px] h-[50px] text-[20px] text-darkBlue pb-[5px] bg-whiter mr-[5vw] border-[2px] border-lighterBlue' onClick={redirectToLogin}>
                    login
                </button>
                {/* Redirect to the sign-up URL when the sign-up button is clicked */}
