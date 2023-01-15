import { Navigate } from "react-router-dom";
import Navbar from '../components/Navbar'
import img2 from '../assets/img2.webp'
const Compte = () => {
  const loged = true;
  return (
    <>
    <Navbar />
      {loged === false && <Navigate to="/login" replace={true} />}
      <div className="compte">
      <div className="tit">
        <h1>Compte client</h1>
        </div>
        
        <div className="body-compte">
        <div className="aside">
          <img className="profile" src={img2} alt="hh" />
        
        <div className="informations">
          <div className="n"><h2>Prenom :</h2><span className="s">Salif M</span></div>
          <div className="n"><h2>Nom :</h2><span className="s">Konate</span></div>
          <div className="n"><h2>Address :</h2><span className="s">Bamako</span></div>
          <div className="n"><h2>Numero :</h2><sapn className='s'>78303208</sapn></div>
        </div>
        </div>
        <div className="mesachat">
          <h2>Mes achats</h2>
        </div>
      </div>
      </div>
    </>
  );
};

export default Compte;
