import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const printItems = localStorage.getItem("user");
  const prontJwt = localStorage.getItem("jwt");
  const [currentUser, setCurrentUser] = useState(
    () => JSON.parse(printItems) || null
  );

  const [currentJwt, setCurrentJwt] = useState(
    () => JSON.parse(prontJwt) || null
  );
  const navigate = useNavigate();

  const loginHandlerFunction = (inputs, jwt) => {
    const {
      _id,
      firstName,
      lastName,
      email,
      isActivated,
      payment,
      referral,
      balance,
      referralEmail,
      createdAt,
      payoutAccId,
    } = inputs;

    setCurrentUser({
      id: _id,
      firstName,
      lastName,
      email,
      isActivated,
      payment,
      referral,
      balance,
      referralEmail,
      createdAt,
      payoutAccId,
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
