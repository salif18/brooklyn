import React from 'react';

const PostProduct = () => {
    return (
        <>
         <div className='postprod'>
            <form>
              <div>
              <label htmlFor='image' className='form-label'>Photo</label>
              <input className='form-control' type='file' name='image' placeholder='Photo' />
              </div>
              <div>
               <label htmlFor='nom' className='form-label'>Nom</label>
               <input className='form-control' type='text' name='nom' placeholder='Nom'/>
              </div>
              <div>
              <label htmlFor='category' className='from-label'>Category</label>
               <select className='form-control'>
               <option value=''>Select-category</option>
               <option></option>
               </select>
              </div>
              <div>
               <label htmlFor='nom' className='form-label'>Description</label>
               <input className='form-control' type='text' name='description' placeholder='Description'/>
              </div>
              <div>
              <label htmlFor='image' className='form-label'>Prix</label>
              <input className='form-control' type='number' name='price' placeholder='Prix' />
              </div>
              <div>
              <button>Poster</button>
              </div>
            </form>
         </div>
        </>
    );
};

export default PostProduct;