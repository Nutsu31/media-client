import { createContext, useState } from "react";

export const LoginContext = createContext(null);

export const SummonLoginProvide = ({ children }) => {
  const [Login, setLogin] = useState(false);

  const loginSummonHandler = () => {
    setLogin(true);
    document.body.style.overflowY = "hidden";
  };

  const loginDeleteHandler = () => {
    setLogin(false);
    document.body.style.overflowY = "initial";
  };

  return (
    <LoginContext.Provider
      value={{ Login, setLogin, loginDeleteHandler, loginSummonHandler }}
    >
      {children}
    </LoginContext.Provider>
  );
};
