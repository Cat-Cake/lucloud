import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Header from "../Coponents/Header";
import '../assets/css/personnal-space.css';
import HeaderConnect from "../Coponents/HeaderConnect";
import {auth, db} from "../config/firebaseConfig";
import { getStorage, ref, listAll } from "firebase/storage";


const PersonnalSpace = () => {
    const [tasks, setTasks] = useState([]);

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
        const tasksRef = collection(db, 'uploadsImgByUser');

        getDocs(tasksRef).then((querySnapshot) => {
            const tasksList = [];
            querySnapshot.forEach((doc) => {
                tasksList.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });

            setTasks(tasksList);
            console.log(tasksList)

            for (let i = 0; i < tasksList.length; i++) {
                if (auth.currentUser.email == tasksList[i].userId) {
                    let img = document.createElement('img')
                    img.src = tasksList[i].image
                    let sectionShowData = document.querySelector('.show-data-list')
                    sectionShowData.append(img)
                }
            }

        });
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

          </section>
      </main>
  )
}

export default PersonnalSpace