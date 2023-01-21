import { createContext, useState } from "react";

//Les valeurs par defauts de nos etats
const defaultValue = {
  token:"",
  userId:null,
  prenom:'',
  userLoggedIn:false,
  login:()=>{},
  logout:()=>{},
};



//creation du hook context
const AuthContext = createContext(defaultValue);
const getUserIdLocalStorage = localStorage.getItem("userId");
const getTokenLocalStorage = localStorage.getItem("token");
const getprofil =localStorage.getItem('prenom')
//creation des contenus qui seront rendus partager dans d'autres composant par le biat
//de provider

export const AuthContextProvider = (props) => {
    //etats modifiables
  const [userId, setUserId] = useState(getUserIdLocalStorage);
  const [token, setToken] = useState(getTokenLocalStorage);
  const [prenom,setPrenom]=useState(getprofil)
  //fonction pour modifiers les etats
  const handlerLogin = (userId, token) => {
    setUserId(userId);
    setToken(token);
    setPrenom(prenom)
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    localStorage.setItem('prenom',prenom)
  };

  const handlerLogout = () => {
    setUserId(null);
    setToken(null);
    localStorage.clear();
  };

  //etats de connection
  const userLoggedIn = !!token


  //contenus qui seront partager 
  const contextValue = {
    userId: userId,
    token: token,
    prenom:prenom,
    isLogged:userLoggedIn,
    login:handlerLogin,
    logout:handlerLogout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
