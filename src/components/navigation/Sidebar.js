import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                <span className="fas fa-home fs-4 me-1"></span>
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/post">
                            <span className="fas fa-paste fs-4 me-1"></span>
                                Posts
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/comment">
                            <span className="fas fa-comment fs-4 me-1"></span>
                                Comments
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/album">
                            <span className="fas fa-images fs-4 me-1"></span>
                                Albums
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/post">
                            <span className="fas fa-camera fs-4 me-1"></span>
                                Photos
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/todo">
                            <span className="fas fa-check fs-4 me-1"></span>
                                Todos
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/user">
                            <span className="fas fa-users fs-4 me-1"></span>
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Sidebar;