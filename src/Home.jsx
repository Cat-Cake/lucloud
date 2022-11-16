import './App.css';
import Header from "./Coponents/Header";
import Footer from "./Coponents/Footer";

function Home() {
    return (
        <section className="home">
            <Header />
            <div className='pres'>
                <div className='pres-content try'>
                    <div className='content-container'>
                        <h1>Service de <span>Cloud simple</span> et <span>rapide</span></h1>
                        <p>Lu<span>Cloud</span> est un service de Cloud <span>gratuit</span> et <span>simple</span> à
                            utiliser tout en étant <span>rapide</span> à mettre en place !
                        </p>
                        <p>Stocker vos fichier et retrouvez sur vos téléphones,
                            tablette ou ordinateur.
                        </p>
                        <div className='button-container'>
                            <button className=''>Essayer maintenant</button>
                            <button className=''>Acceder au Cloud</button>
                        </div>
                    </div>
                </div>
                <div className='pres-content cloud'></div>
            </div>
            <Footer />
        </section>
    );
}

export default Home;
