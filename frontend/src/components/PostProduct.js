import React, { useContext, useState } from "react";
import Axios from 'axios'
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";
const PostProduct = () => {
  const authCtx = useContext(AuthContext)
  const navigate=useNavigate()
  //stockage de donnees poster
  const [postData, setPostData] = useState({userId:authCtx.token,image:'',nom:'',
  category:'',description:'',prix:''});

  const handleChange =(e)=>{
    const {name,value}=e.target 
    setPostData({...postData,[name]:value})
  }

  const handleSubmit =(e)=>{
    //send to server
    const postProdData =async()=>{
         try{
            const res = await Axios.post('http://localhost:3002/products',{...postData},
              
            {
              headers:{
                'Content-Type':'application/json',
                 Authorization: `Bearer ${authCtx.token}`
              }
            })
            if(res){
              const data = await res.data
              setPostData(data)
              navigate('/product')
            }
         }catch(e){
          console.log(e)
         }
    }
    postProdData()
    setPostData({userId:'',image:'',nom:'',
    category:'',description:'',prix:''})
  }
console.log(postData)
  const selection =['Vetement','Chaussure','Accessoire']

  return (
    <>
    
      <div className="postprod">
      <h2 className="title-post">Vendre des produits</h2>
        <form onSubmit={(e)=>handleSubmit(e)} className='form-postprod'>
          <div>
            <label htmlFor="image" className="label-control">
              Photo
            </label>
            <input
              className="form-control"
              type="text"
              name="image"
              value={postData.image}
              onChange={(e)=>handleChange(e)}
              placeholder="Photo"
            />
          </div>
          <div>
            <label htmlFor="nom" className="label-control">
              Nom
            </label>
            <input
              className="form-control"
              type="text"
              name="nom"
              value={postData.nom}
              onChange={(e)=>handleChange(e)}
              placeholder="Nom"
            />
          </div>
          <div>
            <label htmlFor="category" className="label-control">
              Category
            </label>
            <select className="form-control" name='category' 
            value={postData.category} onChange={(e)=>handleChange(e)}>
              <option value="">Select-category</option>
              {selection.map((sele,i)=>(<option key={i} value={sele}>{sele}</option>))}
            </select>
          </div>
          <div>
            <label htmlFor="description" className="label-control">
              Description
            </label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={postData.description}
              onChange={(e)=>handleChange(e)}
              placeholder="Description"
            />
          </div>
          <div>
            <label htmlFor="prix" className="label-control">
              Prix
            </label>
            <input
              className="form-control"
              type="number"
              name="prix"
              value={postData.prix}
              onChange={(e)=>handleChange(e)}
              placeholder="Prix"
            />
          </div>
          <div>
            <button className="btn-post">Poster</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostProduct;
