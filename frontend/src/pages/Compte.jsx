
import { Navigate } from 'react-router-dom';

const Compte = () => {

   const loged = false
    return (
        <>
        {loged === false && (<Navigate to='/login' replace={true}/>)}
        <div className='compte'>
            <h1>compte client</h1>
        </div>
        </>
    );
};

export default Compte;