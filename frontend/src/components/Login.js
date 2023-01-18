import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'
import { ClipLoader } from "react-spinners";
import AuthContext from '../context/authContext'
import Alert from "./Alert";


const Login = () => {
 const [erreur,setErreur]=useState('')
 const authCtx = useContext(AuthContext)

  //Etat de stock des donnees form pour login
  const [dataLogin,setDataLogin]=useState({numero:'',password:''})
  const handleChange =(e)=>{
    const {name,value}=e.target
    setDataLogin({...dataLogin,[name]:value})
  }
   const handleSubmit=(e)=>{
    //envoie vers server
    const postLogin =async()=>{
      try{
         const res = await Axios.post('http://localhost:3002/authentification/login',{...dataLogin})
         if(res){
          const data = await res.data
          authCtx.login(data.token ,data.userId )
         }
      }catch(e){
        setErreur(e)
      }
    }
    postLogin()
    setDataLogin({numero:'',password:''})
   } 
   
   //etat de spinner
   const [loading,setLoading]=useState(false)
   useEffect(()=>{
      setLoading(true)
      setTimeout(()=>setLoading(false),1000)
   },[])

   console.log(authCtx.token)
  return (
    <>
    
    {!erreur &&
      <Alert>
        <div className='entete'> 
          <h1>{erreur}</h1>
        </div>
        <div className='contenu-alert'>
          <h2>Erreur</h2>
          <button className="btn btn-secondary" onClick={()=>setErreur(true)}>Ok</button>
        </div>
      </Alert>
    }
      <div className="login">
      {loading ? <ClipLoader className="spinner-login" size={'40px'} /> :
      <>
        <div className="login-h2">
          <h2 className="title-login">Se connecter</h2>
        </div>
        <form className="form-login" onSubmit={(e)=>handleSubmit(e)}>
          <div>
            <label htmlFor="numero" className="label-control">
              Numero
            </label>
            <input
              className="form-control"
              type="numero"
              id="numero"
              name='numero'
              value={dataLogin.numero}
              onChange={(e)=>handleChange(e)}
              placeholder="Numero :"
            />
          </div>
          <div>
            <label htmlFor="password" className="label-control">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name='password'
              value={dataLogin.password}
              onChange={(e)=>handleChange(e)}
              placeholder="Password"
            />
          </div>
          <div>
            <button className="btn btn-login"><i className="fa-solid fa-right-to-bracket"></i>Login</button>
          </div>
          <div className="creer">
            <p>Pas de compte? <NavLink to='/signup'>Creer un Compte</NavLink> </p>
          </div>
        </form>
        </>
      }
      </div>
    </>
  );
};

export default Login;
