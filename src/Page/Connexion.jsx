import Header from "../Coponents/Header";
import { useFormik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebaseConfig';
import { AuthContext } from '../context/AuthContext'

function Connexion() {

    const onSubmit = (values) => {
        const { email, password } = values;
        // fonction firebase qui permet d'authenfier un utilisateur avec son email et son mot de passe
        signInWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                // On appelle la fn login du context qui permet de changer le state partagé dans le context (isLogged)
                AuthContext.login();
            })
            .catch((e) => {
                console.log(e.message);
            });
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit,
    });

    return (
        <main>
            <Header/>
            <section className="registration-container">
                <div className="profil-user-container">
                    <img className="picture-user-connexion" src="/profil-user.png" alt='Profile user'/>
                    <p>Connexion</p>
                </div>
                <div className="form-user-container">
                    <form className="register-form" method="post" onSubmit={formik.handleSubmit}>
                        <div className="form-content-container">
                            <div className="form-label-container">
                                <label htmlFor="email">Email :</label>
                                <input placeholder="example@email.com" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                            </div>
                            <div className="form-label-container">
                                <label htmlFor="password">Password :</label>
                                <input type={"password"} placeholder="ExamplePassword@123" name="password" autoComplete="false" autoComplete="false" onChange={formik.handleChange} value={formik.values.password}/>
                            </div>
                        </div>
                        <div className="register-with-other">
                            <button className="btn connect-with-other">Se connecter avec Google</button>
                            <button className="btn connect-with-other">Se connecter avec Apple</button>
                        </div>
                        <div className="register-button-container button-container">
                            <button className="submit btn-full" type="submit">Connexion</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Connexion;
