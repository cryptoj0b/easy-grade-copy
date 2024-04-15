import googleLogo from './pngegg(1).png';
export default function GoogleButton(){
    return(
        <>
        {/* don't mind all this design stuff, love tailwind... */}
        <hr className='my-5'/>
        {/* do the authentication on this div below me, add onClick = "" and use that to put in the location of authenticator*/}
          <div className="relative cursor-pointer flex justify-center items-center bg-whiter w-full border-black border-2 rounded mt-2 h-9 py-5">
          <img className="w-9 mr-auto left-0" src={googleLogo}></img>
          <p className="ml-0 mr-auto ">Continue with Google </p>
          </div>
        </>
    )
}