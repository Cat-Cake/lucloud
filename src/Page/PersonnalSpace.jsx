import { signOut } from 'firebase/auth';
import {auth} from "../config/firebaseConfig";
import { useNavigate } from 'react-router-dom';

const PersonnalSpace = () => {

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        });
    };

  return (
      <main>
          <p>Espace personnel</p>
          <button onClick={logout}>Se déconnecter</button>
      </main>
  )
}

export default PersonnalSpace