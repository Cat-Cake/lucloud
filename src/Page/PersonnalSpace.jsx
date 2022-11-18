import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from "../Coponents/Header";


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
          <Header />
          <div>
              <p>Espace personnel</p>
              <button onClick={logout}>Se déconnecter</button>
          </div>
      </main>
  )
}

export default PersonnalSpace