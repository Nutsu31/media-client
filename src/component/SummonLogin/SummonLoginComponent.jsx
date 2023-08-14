import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext(null);

export const SummonLoginProvide = ({ children }) => {
  const [Login, setLogin] = useState(false);
  const [forgotpass, setForgotPass] = useState(false);
  const [verifyCode, setVerifyCode] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const loginSummonHandler = () => {
    setLogin(true);
    document.body.style.overflowY = "hidden";
  };

  const loginDeleteHandler = () => {
    setLogin(false);
    document.body.style.overflowY = "initial";
  };

  const verifyCodeHandler = () => {
    setForgotPass(false);
    setVerifyCode(true);
    document.body.style.overflowY = "hidden";
  };

  const verifyCodeDeleteHandler = () => {
    setVerifyCode(false);
    document.body.style.overflowY = "initial";
  };

  const forgotPasswordHandler = () => {
    setForgotPass(true);
    setLogin(false);
    document.body.style.overflowY = "hidden";
  };

  const forgotPasswordDeleteHandler = () => {
    setForgotPass(false);
    document.body.style.overflowY = "initial";
  };

  const changePasswordHandler = () => {
    setChangePassword(true)
    document.body.style.overflowY = "hidden";
  };

  const changePasswordDeleteHandler = () => {
    setChangePassword(false);
    document.body.style.overflowY = "initial";
  };


  return (
    <LoginContext.Provider
      value={{
        Login,
        forgotpass,
        verifyCode,
        changePassword,
        setLogin,
        loginDeleteHandler,
        loginSummonHandler,
        forgotPasswordHandler,
        forgotPasswordDeleteHandler,
        verifyCodeHandler,
        verifyCodeDeleteHandler,
        changePasswordDeleteHandler,
        changePasswordHandler,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
