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
                        }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/tasks" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/news" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>News</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/events" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>Events</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/messages" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>Messages</NavLink>
                    </li>
                    {!props.currentUser
                        ? <li>
                            <NavLink className="navlink" to="/login" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Login</NavLink>
                        </li>
                        :<li><span className="navlink" onClick={manageLogout}>Logout</span></li> 
                    }
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(NavBar);