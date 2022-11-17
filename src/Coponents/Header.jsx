function menuOpening() {
    let modal = document.querySelector('.modal')
    modal.classList.toggle("modal-close");
}

function Header() {
    return (
        <header className="website-header">
            <div>
                <p className="band-title"><a href={`/`}>Lu<span>Cloud</span></a></p>
            </div>
            <nav>
                <ul>
                    <li><a className="menu-connect" href={`connexion`}>Se connecter</a></li>
                    <li><a className="menu-register" href={`registration`}><button className="btn btn-full">S'inscrire</button></a></li>
                    <li onClick={menuOpening} ><img className="menu-burger" src="/menu.png" alt='Menu'/></li>
                </ul>
                <div className="modal-container">
                    <div className="modal modal-close">
                        <a className="modal-menu modal-menu-connect" href={`connexion`}>Se connecter</a>
                        <a className="modal-menu modal-menu-register" href={`registration`}>S'inscrire</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
