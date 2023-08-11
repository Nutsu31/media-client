import { createContext, useCallback, useState } from "react";

export const SignUpContext = createContext(null);

export const SummonSignUpComponent = ({ children }) => {
  const [SignUp, setSignUp] = useState(false);
  const [btnClassname, setBtnClassname] = useState(null);
  const [Verify, setVerify] = useState(false);
  const [emailVerify, setEmailVerify] = useState(false);

  const signUpHandler = useCallback((className) => {
    setSignUp(true);
    document.body.style.overflowY = "hidden";
    setBtnClassname(className);
  }, []);

  const verifyhandler = useCallback(() => {
    setVerify(true);
    document.body.style.overflowY = "hidden";
  }, []);

  const emailVerifyhandler = useCallback(() => {
    setEmailVerify(true);
    document.body.style.overflowY = "hidden";
  }, []);

  const verifyDeletehandler = useCallback(() => {
    setVerify(false);
    document.body.style.overflowY = "initial";
  }, []);

  const signUpDltHandler = useCallback(() => {
    setSignUp(false);
    document.body.style.overflowY = "initial";
    setBtnClassname(null);
  }, []);

  const emailVerifyhandlerHandler = useCallback(() => {
    setEmailVerify(false);
    document.body.style.overflowY = "initial";
  }, []);

  return (
    <div>
      <SignUpContext.Provider
        value={{
          SignUp,
          Verify,
          verifyhandler,
          setSignUp,
          signUpHandler,
          signUpDltHandler,
          btnClassname,
          verifyDeletehandler,
          emailVerify,
          emailVerifyhandlerHandler,
          emailVerifyhandler,
        }}
      >
        {children}
      </SignUpContext.Provider>
    </div>
  );
};
