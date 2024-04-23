import teacher from './Teacher.png';
import student from './Student.png';
export default function TeacherOrStudentAR(){
    document.body.style.display = 'flex';
    document.body.style.paddingTop = '0';
    return(
        <>
        <div className=' grid py-[100px] mt-[3vw]'>
        <div className='flex items-center justify-center text-whiter font-Tajawal text-[40px] sm:text-[60px] mb-10'>
            أي من هذه تمثلك؟
            </div>
        <div className='flex w-screen justify-center items-center'>
        <button className='bg-white h-[250px] w-[250px] justify-center rounded grid mr-[7vw] sm:mr-[15vw] text-[40px] sm:text-[50px] font-Tajawal  hover:scale-105 transition ease-in-out delay-50 duration-300'><img src={teacher} className='w-[150px]  ml-1 mt-7 -mb-9'></img> <span>معلم</span></button>
        <button className='bg-white h-[250px] w-[250px] justify-center  rounded grid text-[40px] sm:text-[50px] font-Tajawal  hover:scale-105 transition ease-in-out delay-50 duration-300'><img src={student} className='w-[150px] pt-4 mt-3 -mb-6'></img> <span>طالب</span></button>
        </div>
        </div>
        </>
    )
}