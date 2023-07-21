import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const loginHandlerFunction = (inputs, jwt) => {
    setCurrentUser({
      id: inputs._id,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      email: inputs.email,
      isActivated: inputs.isActivated,
      payment: inputs.payment,
      referral: inputs.referral,
      balance: inputs.balance,
      referralEmail: inputs.referralEmail,
      createdAt: inputs.createdAt,
    });

    setCurrentJwt(jwt);
  };
  const logoutHandlerFunction = () => {
    setCurrentUser(null);
    setCurrentJwt(null);
    localStorage.setItem("data", null);
    navigate("/");
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
