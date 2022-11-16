function Header() {
    return (
        <header className="website-header">
            <div>
                <p className="band-title">Lu<span>Cloud</span></p>
            </div>
            <nav>
                <ul>
                    <li><a href={`connexion`}>Se connecter</a></li>
                    <li><a href={`registration`}><button className="btn btn-full">S'inscrire</button></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
