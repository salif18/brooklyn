import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Axios from 'axios'
import Alert from "./Alert";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [erreur,setErreur] = useState('')
  //etat de stock de donnee de signup
  const [dataSignup, setDataSignup] = useState({
    prenom:"",
    nom:"",
    address:'',
    numero:"",
    password:"",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSignup({ ...dataSignup, [name]: value });
  };
  const handleSubmit = (e) => {
    //envoie vers server
    const postSignup = async()=>{
      try{
           const res = await Axios.post('http://localhost:3002/authentification/signup',dataSignup)
           if(res){
            const data = await res.data
            setDataSignup(data)
           }
          
      }catch(e){
        setErreur(e)
      }
    }
    postSignup()
    setDataSignup({ prenom:"", nom:"",address:'', numero:"", password:"" });
  };

  
  //etat spinner
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>setLoading(false),1000)
  },[])
  
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
      <div className="signup">
      {loading ? <ClipLoader className="spinner-login" size={'40px'}/> :
        <>
        <div>
          <h2 className="title-signup">S'enregistrer</h2>
        </div>
        <form className="form-signup" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="prenom" className="label-control">
              Prenom
            </label>
            <input
              className="form-control"
              name="prenom"
              value={dataSignup.prenom}
              onChange={(e) => handleChange(e)}
              type="text"
              id="prenom"
              placeholder="Prenom :"
            />
          </div>
          <div>
            <label htmlFor="nom" className="label-control">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="nom"
              value={dataSignup.nom}
              onChange={(e) => handleChange(e)}
              placeholder="Nom :"
            />
          </div>
          <div>
          <label htmlFor="address" className="label-control">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={dataSignup.address}
            onChange={(e) => handleChange(e)}
            placeholder="Address :"
          />
        </div>
          <div>
            <label htmlFor="numero" className="label-control">
              Numero
            </label>
            <input
              className="form-control"
              type="number"
              name="numero"
              value={dataSignup.numero}
              onChange={(e) => handleChange(e)}
              id="numero"
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
              name="password"
              value={dataSignup.password}
              onChange={(e) => handleChange(e)}
              id="password"
              placeholder="Password :"
            />
          </div>
          <div>
            <button className="btn btn-signup">
              <i className="fa-solid fa-user-plus"></i>Signup
            </button>
          </div>
        </form>
      </>} 
      </div>
    </>
  );
};

export default Signup;
