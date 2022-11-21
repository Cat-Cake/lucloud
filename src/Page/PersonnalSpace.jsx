import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from "../Coponents/Header";
import '../assets/css/personnal-space.css';
import HeaderConnect from "../Coponents/HeaderConnect";


const PersonnalSpace = () => {

    const navigate = useNavigate();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
            navigate('/')
        }
    });

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        });
    };

  return (
      <main>
          <HeaderConnect/>
          <article className={"option-article"}>
              <div className={"check-all"}>
                  <input type={"checkbox"} />
                  <p>Tout cocher</p>
              </div>
              <button className="btn btn-full">PLus d'action</button>
              <a href={`upload`}>Téléversement</a>
          </article>
      </main>
  )
}

export default PersonnalSpace