import React, { useState } from "react";
import NavBar from "./nav/Navbar"
import ApplicationViews from "./ApplicationViews"
import "./Nutshell.css"

const Nutshell = () => {
    const isLoggedIn = () => sessionStorage.getItem("userCredentials") !== null;

    const [currentUser, setCurrentUser] = useState(isLoggedIn());

    const setAsUser = user => {
        sessionStorage.setItem("userCredentials", JSON.stringify(user));
        setCurrentUser(isLoggedIn());
    }

    const clearAsUser = () => {
        sessionStorage.clear();
        setCurrentUser(isLoggedIn());
    }

    return (
        <> 
            <NavBar currentUser={currentUser} clearAsUser={clearAsUser} />
            <ApplicationViews currentUser={currentUser} setAsUser={setAsUser} />
        </>
    );
};


export default Nutshell;