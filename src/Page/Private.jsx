import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Private = ({ children }) => {
    const navigate = useNavigate();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log('connecté')
            console.log(uid)
            navigate('/personnal-space')
        } else {
            console.log('pas connecté')
        }
    });
};

export default Private;
