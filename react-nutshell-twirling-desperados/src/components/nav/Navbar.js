import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
    const manageLogout = () => {
        props.clearAsUser();
        props.history.push('/login')
    }

    return (
        <header>
            <h1 className="project-title">Nutshell</h1>

            <nav>
                <ul className="navlink-container">
                    <li>
                        <NavLink className="navlink" to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(NavBar);