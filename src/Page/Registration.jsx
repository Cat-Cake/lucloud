function Registration() {
    return (
        <main className="registration-container">
            <div className="profil-user-container">
                <img className="picture-user-connexion" src="/profil-user.png" alt='Profile user'/>
                <p>Enregistrement</p>
            </div>
            <div className="form-user-container">
                <form className="register-form" method="post">
                    <div className="form-content-container">
                        <div className="form-label-container">
                            <label htmlFor="email">Email :</label>
                            <input name="email"/>
                        </div>
                        <div className="form-label-container">
                            <label htmlFor="password">Password :</label>
                            <input name="password" autoComplete="false"/>
                        </div>
                    </div>
                    <div>
                        <p className="subtitle">J'ai déja un compte ?</p>
                    </div>
                    <div className="register-with-other">
                        <button>Se connecter avec Google</button>
                        <button>Se connecter avec Apple</button>
                    </div>
                    <div className="button-container">
                        <button className="submit" type="submit">Se connecter</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Registration;
