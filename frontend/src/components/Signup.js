import React from 'react';

const Signup = () => {
    return (
        <>
        <div className='signup'>
        <div><h2 className='title-signup'>S'enregistrer</h2></div>
        <form className='form-signup'>
       <div>
          <label htmlFor='prenom' className='label-control'>Prenom</label>
          <input className='form-control' type='text' id='prenom' placeholder='Prenom :' />
       </div>
       <div>
          <label htmlFor='nom' className='label-control'>Nom</label>
          <input type='text' className='form-control' id='nom' placeholder='Nom :'/>
       </div>
       <div>
       <label htmlFor='numero' className='label-control'>Numero</label>
       <input className='form-control' type='number' id='numero' placeholder='Numero :' />
    </div>
    <div>
       <label htmlFor='password' className='label-control'>Password</label>
       <input type='password' className='form-control' id='password' placeholder='Password :'/>
    </div>
       <div>
         <button className='btn btn-signup'><i className="fa-solid fa-user-plus"></i>Signup</button>
       </div>
       </form>
      </div>
        </>
    );
};

export default Signup;