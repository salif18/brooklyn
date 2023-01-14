import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'
import { ClipLoader } from "react-spinners";

const Login = () => {

  //Etat de stock des donnees form pour login
  const [dataLogin,setDataLogin]=useState({numero:'',password:''})
  const handleChange =(e)=>{
    const {name,value}=e.target
    setDataLogin({...dataLogin,[name]:value})
  }
   const handleSubmit=(e)=>{
    //envoie vers server
    setDataLogin({numero:'',password:''})
   }
   //etat de spinner
   const [loading,setLoading]=useState(false)
   useEffect(()=>{
      setLoading(true)
      setTimeout(()=>setLoading(false),1000)
   },[])

  return (
    <>
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
