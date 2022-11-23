import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Header from "../Coponents/Header";
import '../assets/css/personnal-space.css';
import HeaderConnect from "../Coponents/HeaderConnect";
import {auth, db} from "../config/firebaseConfig";
import { getStorage, ref, listAll } from "firebase/storage";


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

    useEffect(() => {
        // console.log(auth.currentUser)
        // const tasksRef = collection(db, 'uploadsImgByUser');
        const q = query(collection(db, "uploadsImgByUser"), where("userId", "==", auth.currentUser.email));
        console.log(q)
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



        // getDocs(tasksRef).then((querySnapshot) => {
        //     const tasksList = [];
        //     querySnapshot.forEach((doc) => {
        //         tasksList.push({
        //             id: doc.id,
        //             ...doc.data(),
        //         });
        //     });
        //
        //     setTasks(tasksList);
        //     console.log(tasksList)
        //
        //     for (let i = 0; i < tasksList.length; i++) {
        //         if (auth.currentUser.email == tasksList[i].userId) {
        //             let img = document.createElement('img')
        //             img.src = tasksList[i].image
        //             let sectionShowData = document.querySelector('.show-data-list')
        //             sectionShowData.append(img)
        //         }
        //     }
        //
        // });
    }, []);

    return (
      <main>
          <HeaderConnect/>
          <article className={"option-article"}>
              <div className={"check-all"}>
                  <input type={"checkbox"} />
                  <p>Tout cocher</p>
              </div>
              <button className="btn btn-full">PLus d'action</button>
              <a href={`upload`}><button className={"btn btn-full"}>Téléversement</button></a>
          </article>
          <section className={"show-data-list"}>
              {data.map((payLoad) => (
                  <img src={payLoad.image} />
              ))}
          </section>
      </main>
  )
}

export default PersonnalSpace