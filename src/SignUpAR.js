import GoogleButton from "./GoogleButton";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';

export default function SignupAR() {
  document.body.style.display = 'flex';
  document.body.style.backgroundColor = "#0b3050";
  document.body.style.paddingTop = "50px";
  const navigate = useNavigate();

  return (
    <div>
      <div className="custom-container text-center bg-whiter" >
        <form method="post">
          <div className="header" style={{ direction: 'rtl'}}>التسجيل</div>
          {/* استخدم هذا لإدخال البريد الإلكتروني ، تحقق من الاسم */}
          <input style={{ direction: 'rtl'}} type="email" id="email" name="email" placeholder=" البريد الإلكتروني" className="emailBox font-Tajawal" /><br /><br />
          {/* استخدم هذا لإدخال كلمة المرور ، تحقق أيضًا من الاسم */}
          <input style={{ direction: 'rtl'}} type="password" className="emailBox font-Tajawal" placeholder=" إنشاء كلمة المرور" id="password1" name="password" /><br /><br />
          <input style={{ direction: 'rtl'}} type="password" className="emailBox font-Tajawal" placeholder=" تأكيد كلمة المرور" id="password2" name="password" /><br /><br />

          {/* قم بتغيير الطريقة والإجراء وما تحتاج إليه */}
          <input type="submit" style={{ direction: 'rtl'}} value="التسجيل" className="logButton cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500" />
          {/* قم بتغيير GoogleButton.js وليس هذا */}
          <GoogleButton/>
        </form>
      </div>
    </div>
  );
}
