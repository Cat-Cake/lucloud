import logo from './logo.svg';
import React from "react";
import './assets/css/Header.css';
import './assets/default/default.css';
import './assets/css/main.css';
import './assets/css/btn-full.css';
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
    }
]);

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
