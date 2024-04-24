import React from 'react';

export default function TeacherOrStudent() {
    document.body.style.display = 'flex';
    document.body.style.paddingTop = '0';

    const baseLoginUrl = "https://inf.auth.eu-north-1.amazoncognito.com/oauth2/authorize";
    const clientId = "client_id=24po8h2hhguqkjh1ial0sqve7f";
    const responseType = "response_type=code";
    const scope = "scope=email+openid";
    const redirectUriTeacher = " https://i5.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=7pic17ep56u5p9fkdhkjavte81&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fmaster.d3dywdz0zlcr7c.amplifyapp.com%2Fhome";
    const redirectUriStudent = " https://i5.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=7pic17ep56u5p9fkdhkjavte81&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fmaster.d3dywdz0zlcr7c.amplifyapp.com%2Fhome";

    const loginUrlTeacher = `${baseLoginUrl}?${clientId}&${responseType}&${scope}&${redirectUriTeacher}`;
    const loginUrlStudent = `${baseLoginUrl}?${clientId}&${responseType}&${scope}&${redirectUriStudent}`;

    const handleTeacherClick = () => {
        window.location.href = loginUrlTeacher;
    };

    const handleStudentClick = () => {
        window.location.href = loginUrlStudent;
    };

    return (
        <>
            <div className='grid py-[100px] mt-[3vw]'>
                <div className='flex items-center justify-center text-whiter font-Tajawal mb-10 text-[30px] md:text-[60px]'>
                    Which one represents you?
                </div>
                <div className='flex w-screen justify-center items-center'>
                    <button onClick={handleTeacherClick} className='bg-white justify-center h-[250px] w-[250px] hover:scale-105 rounded grid mr-[7vw] sm:mr-[15vw] text-[40px] sm:text-[50px] font-Tajawal transition ease-in-out delay-50 duration-300'>
                        <img src={require('./Teacher.png')} className='w-[130px] ml-4 mt-9 -mb-9'></img>
                        <span>Teacher</span>
                    </button>
                    <button onClick={handleStudentClick} className='bg-white justify-center h-[250px] w-[250px] rounded grid text-[40px] sm:text-[50px] font-Tajawal hover:scale-105 transition ease-in-out delay-50 duration-300'>
                        <img src={require('./Student.png')} className='w-[150px] pt-4 pl-5 mt-6 -mb-6'></img>
                        <span>Student</span>
                    </button>
                </div>
            </div>
        </>
    );
}
