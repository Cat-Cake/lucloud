import Header from "../Coponents/Header";

function Registration() {
    return (
        <main>
            <Header/>
            <section className="registration-container">
                <div className="profil-user-container">
                    <img className="picture-user-connexion" src="/profil-user.png" alt='Profile user'/>
                    <p>Enregistrement</p>
                </div>
                <div className="form-user-container">
                    <form className="register-form" method="post">
                        <div className="form-content-container">
                            <div className="form-label-container">
                                <label htmlFor="email">Email :</label>
                                <input placeholder="example@email.com" name="email"/>
                            </div>
                            <div className="form-label-container">
                                <label htmlFor="password">Password :</label>
                                <input placeholder="ExamplePassword@123" name="password" autoComplete="false"/>
                            </div>
                        </div>
                        <div className="register-with-other">
                            <button className="btn connect-with-other">Se connecter avec Google</button>
                            <button className="btn connect-with-other">Se connecter avec Apple</button>
                        </div>
                        <div className="register-button-container button-container">
                            <button className="submit btn-full" type="submit">S'enregistrer</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Registration;
