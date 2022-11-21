import React from "react";
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth, db } from './config/firebaseConfig';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./Home";
import Connexion from "./Page/Connexion";
import Registration from "./Page/Registration";
import Uploads from "./Page/Uploads";
import Page404 from "./Page/Page404";
import PersonnalSpace from "./Page/PersonnalSpace";
import Private from "./Page/Private";
import './assets/css/Header.css';
import './assets/default/default.css';
import './assets/css/main.css';
import './assets/css/modal.css';
import './assets/css/btn-full.css';
import './assets/css/btn-empty.css';
import './assets/css/footer.css';
import './assets/css/input.css';
import './assets/css/upload.css';
import './assets/css/Page404.css';
import './assets/css/registrationConnexion.css';
import './assets/js/headerContent';
import {collection, getDocs} from "firebase/firestore";
const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/connexion",
        element: <Connexion />
    },
    {
        path: "/registration",
        element: <Registration />
    },
    {
        path: "/upload",
        element: <Uploads />
    },
    {
        path: "/personnal-space",
        element: <PersonnalSpace />
    },
    {
        path: "/private",
        element: <Private />
    },
    {
        path: "*",
        element: <Page404 />
    }
]);

function App() {

    const [tasks, setTasks] = useState([]);

    const [isLogged, setIsLogged] = useState(false);

    const login = () => {
        setIsLogged(true);
    };

    const logout = () => {
        signOut(auth).then(() => {
            setIsLogged(false);
        });
    };




  return (
    <RouterProvider router={route} />
  );
}

export default App;