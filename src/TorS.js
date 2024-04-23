import teacher from './Teacher.png';
import student from './Student.png';
export default function TeacherOrStudent(){
    document.body.style.display = 'flex';
    document.body.style.paddingTop = '0';
    return(
        <>
        <div className=' grid py-[100px] mt-[3vw]'>
        <div className='flex items-center justify-center text-whiter font-Tajawal mb-10 text-[30px] md:text-[60px]'>
            Which one represents you?
            </div>
        <div className='flex w-screen justify-center items-center'>
        <button className='bg-white justify-center h-[250px] w-[250px]  hover:scale-105 rounded grid mr-[7vw] sm:mr-[15vw] text-[40px] sm:text-[50px] font-Tajawal transition ease-in-out delay-50 duration-300'><img src={teacher} className='w-[130px]  ml-4 mt-9 -mb-9'></img> <span>Teacher</span></button>
        <button className='bg-white justify-center h-[250px]  w-[250px]  rounded grid text-[40px] sm:text-[50px] font-Tajawal hover:scale-105 transition ease-in-out delay-50 duration-300'><img src={student} className='w-[150px] pt-4 pl-5 mt-6 -mb-6'></img> <span>Student</span></button>
        </div>
        </div>
        </>
    )
}