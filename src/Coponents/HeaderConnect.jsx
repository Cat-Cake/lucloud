import {useNavigate} from "react-router-dom";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";

function menuOpening() {
    let modal = document.querySelector('.modal-perso')
    modal.classList.toggle("modal-close");
}

function HeaderConnect() {

    const navigate = useNavigate();

    const auth = getAuth();

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        });
    };

    return (
        <header className="website-header">
            <div>
                <p className="band-title"><a href={`/`}>Lu<span>Cloud</span></a></p>
            </div>
            <nav>
                <ul className={"menu-opening-all-container"}>
                    <li className={"menu-container"} onClick={menuOpening} ><img className="menu" src="/menu-perso.png" alt='Menu'/></li>
                </ul>
                <div className="modal-container">
                    <div className="modal-perso modal-close">

                        <button onClick={logout}>Se déconnecter</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderConnect;
