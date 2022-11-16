function Header() {
    return (
        <header>
            <h2>Lu<span>Cloud</span></h2>
            <nav>
                <ul>
                    <li><a href={`registration`}><button className="btn btn-register">S'inscrire</button></a></li>
                    <li><a href={`connexion`}><button className="btn btn-connexion">Se connecter</button></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
