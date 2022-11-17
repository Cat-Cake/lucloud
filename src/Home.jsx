import './App.css';
import Header from "./Coponents/Header";
import Footer from "./Coponents/Footer";

function Home() {
    return (
        <main className="home">
            <Header />
            <article className='pres'>
                <div className='pres-content try'>
                    <div className='content-container'>
                        <header>
                            <h2>Service de <span>Cloud simple</span> et <span>rapide</span></h2>
                        </header>
                        <p>Lu<span>Cloud</span> est un service de Cloud <span>gratuit</span> et <span>simple</span> à
                            utiliser tout en étant <span>rapide</span> à mettre en place !
                        </p>
                        <p>Stocker vos fichier et retrouvez sur vos téléphones,
                            tablette ou ordinateur.</p>
                        <footer className='button-container'>
                            <button className='btn-full'>Essayer maintenant</button>
                            <button className='btn-empty'>Acceder au Cloud</button>
                        </footer>
                    </div>
                </div>
                <div className='pres-content cloud'>
                    <img src="/girl _with_cloud.png" alt='Girl with cloud'/>
                </div>
            </article>
            <div className="separation">
                <p className="discover">Découvrir la suite !</p>
                <a href="#secure"><img className="down-arrow" src="/arrow-down.png" alt='Down arrow'/></a>
            </div>

            <article id="secure" className="secure">
                <div className='pres-content cloud'>
                    <img src="/cloud_secure_files.png" alt='Girl with cloud'/>
                </div>
                <div className="pres-content try">
                    <div className='secure-content-container'>
                        <h2>Fichier <span>stocké</span> et <span>sécurisé</span></h2>
                        <p>Grace à Lu<span>Cloud</span> vous pourrez <span>stocker</span> vos fichiers avec <span>simplicité</span>.
                        </p>
                        <p>Stocker vos fichier et retrouvez sur vos téléphones,
                            tablette ou ordinateur.
                        </p>
                        <div className='button-container'>
                            <button className='btn-full'>Essayer maintenant</button>
                            <button className='btn-empty'>Acceder au Cloud</button>
                        </div>
                    </div>
                </div>
            </article>
            <section className="reassurance">
                <header className="reassurance-title">
                    <h2>Les <span>avantages</span> du stockage en ligne chez Lu<span>Cloud</span> ?</h2>
                </header>
                <div className="reassurance-pictures-container">
                    <div className="img-container">
                        <img className="reassurance-picture" src="/pig_price_zero.png" alt='Price is zero'/>
                        <div className="text-container">
                            <p>C'est <span>gratuit</span> alors pourquoi ne pas essayer !</p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img className="reassurance-picture" src="/men-data-shield.png" alt='Data private'/>
                        <div className="text-container">
                            <p>Nous accordons une très grande <span>importance</span> envers la <span>sécurisation</span> de vos <span>données</span>.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Home;
