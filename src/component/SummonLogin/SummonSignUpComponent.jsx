import { createContext, useCallback, useState } from "react";

export const SignUpContext = createContext(null);

export const SummonSignUpComponent = ({ children }) => {
  const [SignUp, setSignUp] = useState(false);
  const [btnClassname, setBtnClassname] = useState(null);

  const signUpHandler = useCallback((className) => {
    setSignUp(true);
    document.body.style.overflowY = "hidden";
    setBtnClassname(className);
  }, []);

  const signUpDltHandler = useCallback(() => {
    setSignUp(false);
    document.body.style.overflowY = "initial";
    setBtnClassname(null);
  }, []);

  return (
    <div>
      <SignUpContext.Provider
        value={{
          SignUp,
          setSignUp,
          signUpHandler,
          signUpDltHandler,
          btnClassname,
        }}
      >
        {children}
      </SignUpContext.Provider>
    </div>
  );
};
