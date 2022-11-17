import React from "react";
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
import ReactDOM from "react-dom/client";
import { collection, getDocs } from 'firebase/firestore';
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
        path: "*",
        element: <Page404 />
    }
]);

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;