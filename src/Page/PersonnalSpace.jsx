import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Header from "../Coponents/Header";
import '../assets/css/personnal-space.css';
import HeaderConnect from "../Coponents/HeaderConnect";
import {auth, db, storage} from "../config/firebaseConfig";
import { getStorage, ref, listAll, getBlob } from "firebase/storage";


const PersonnalSpace = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
            navigate('/')
        }
    });

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        });
    };

    const [downloadLink, setDownloadLink] = useState(null);
    const [media, setMedia] = useState([]);

    const linkRef = useRef(null);

    const downloadImage = (event) => {
        const src = event.target.src;
        const imgRef = ref(storage, src);

        getBlob(imgRef)
            .then((blob) => {
                const bloblink = window.URL.createObjectURL(blob);
                setDownloadLink(bloblink);
            })
            .catch((e) => {
                // console.log(e.message);
            });
        console.log(src);
    };

    useEffect(() => {
        if (downloadLink) {
            linkRef.current.click();
        }

        return () => {
            window.URL.revokeObjectURL(downloadLink)
        };
    }, [downloadLink]);


    useEffect(() => {
        // console.log(auth.currentUser)
        // const tasksRef = collection(db, 'uploadsImgByUser');
        const q = query(collection(db, "uploadsImgByUser"), where("userId", "==", auth.currentUser.email));
        // console.log(q)
        getDocs(q).then(querySnapshot=> {
            const payLoad = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                payLoad.push({
                    id:doc.id,
                    ...doc.data()
                })
            });
            setData(payLoad)

        }).catch(error=> {
            console.log(error)
        })




    }, []);

    return (
      <main>
          <HeaderConnect/>
          <article className={"option-article"}>
              <div className={"check-all"}>
                  {/*<input type={"checkbox"} />*/}
                  {/*<p>Tout cocher</p>*/}
              </div>
              <button className="btn btn-full">PLus d'action</button>
              <a href={`upload`}><button className={"btn btn-full"}>Téléversement</button></a>
          </article>
          <section className={"show-data-list"}>
                  {data.map((payLoad) => (
                      <card>
                          <img src={payLoad.image} />
                          {downloadLink && (
                              <a ref={linkRef} href={downloadLink}>Télécharger</a>
                          )}
                      </card>
                  ))}
          </section>
      </main>
  )
}

export default PersonnalSpace