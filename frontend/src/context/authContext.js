import { createContext, useState } from "react";

//Les valeurs par defauts de nos etats
const defaultValue = {
  userId: "",
  token: "",
  isLogged:false,
  login: () => {},
  logout: () => {},
};

const getUserIdLocalStorage = localStorage.getItem("userId");
const getTokenLocalStorage = localStorage.getItem("token");

//creation du hook context
const AuthContext = createContext(defaultValue);


//creation des contenus qui seront rendus partager dans d'autres composant par le biat
//de provider

export const AuthContextProvider = (props) => {
    //etats modifiables
  const [userId, setUserId] = useState(getUserIdLocalStorage);
  const [token, setToken] = useState(getTokenLocalStorage);

  //fonction pour modifiers les etats
  const handlerLogin = (userId, token) => {
    setUserId(userId);
    setToken(token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
  };

  const handlerLogout = () => {
    setUserId(null);
    setToken(null);
    localStorage.clear();
  };

  //etats de connection
  const isLoggedIn = !! token


  //contenus qui seront partager 
  const contextValue = {
    userId: userId,
    token: token,
    isLogged:isLoggedIn,
    login: handlerLogin,
    logout: handlerLogout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
