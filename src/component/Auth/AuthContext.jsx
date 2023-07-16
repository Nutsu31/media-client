import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const printItems = localStorage.getItem("user");
  const prontJwt = localStorage.getItem("jwt");

  const [currentUser, setCurrentUser] = useState(
    printItems ? JSON.parse(printItems) : null
  );

  const [currentJwt, setCurrentJwt] = useState(
    printItems ? JSON.parse(prontJwt) : null
  );

  const loginHandlerFunction = (inputs, jwt) => {
    setCurrentUser({
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      email: inputs.email,
      isActivated: inputs.isActivated,
      payment: inputs.payment,
    });

    setCurrentJwt(jwt);
  };
  const logoutHandlerFunction = () => {
    setCurrentUser(null);
    setCurrentJwt(null);
    localStorage.setItem("data", null);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("jwt", JSON.stringify(currentJwt));
  }, [currentUser, currentJwt]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loginHandlerFunction,
        logoutHandlerFunction,
        currentJwt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
