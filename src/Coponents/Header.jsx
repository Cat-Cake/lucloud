function menuOpening() {
    let modal = document.querySelector('.modal')
    modal.classList.toggle("modal-close");
}

function Header() {
    return (
        <header className="website-header">
            <div>
                <p className="band-title">Lu<span>Cloud</span></p>
            </div>
            <nav>
                <ul>
                    <li><a className="menu-connect" href={`connexion`}>Se connecter</a></li>
                    <li><a className="menu-register" href={`registration`}><button className="btn btn-full">S'inscrire</button></a></li>
                    <li onClick={menuOpening} ><img className="menu-burger" src="/menu.png" alt='Menu'/></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
