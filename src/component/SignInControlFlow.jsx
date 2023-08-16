import React,{useState} from 'react'
import LoginSection from "./LoginSection";
import ForgetPassword from './ForgetPassword';
import VerifyCode from './VerifyCode';
import UpdatePassword from './UpdatePassword';



const SignInControlFlow = () => {
  const [verify,setVerify]=useState('');
  return (
    <>
      <LoginSection />
      <ForgetPassword verify={verify} setVerify={setVerify} />
      <VerifyCode verify={verify} />
      <UpdatePassword email={verify} setVerify={setVerify} />
    </>
  );
}

export default SignInControlFlow