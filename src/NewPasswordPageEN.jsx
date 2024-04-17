import NewPassword from "./NewPassword";

export default function NewPasswordPageEN () {
  document.body.style.display = 'flex';
  document.body.style.paddingTop = '30px';
    return (
        <div>
        <div className="custom-container flex justify-center items-center">
        <form  id="myForm" className ="bg-whiter rounded"method="post" >
          <NewPassword/>
        </form>
      </div>
      </div>
    )
}