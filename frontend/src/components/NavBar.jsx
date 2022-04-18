import React, { useEffect, useState } from 'react';
import '../styles/NavBar.css';
import rivian_logo from '../img/rivian_logo.png'
import { ArrowRight, BoxArrowRight } from 'react-bootstrap-icons';

const NavBar = ({sidebarOpen, defaultActiveRoute, toggleSideBar}) => {

    const [pathName, setPathName] = useState();
    const [userInfo, setUserInfo] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false)
    
    // console.log(accounts[0]);
    function handleLogout(instance) {
      instance.logoutRedirect().catch(e => {
        console.error(e);
      });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        !sidebarOpen &&
                        <>
                        <button className="expand-button" onClick={toggleSideBar} title="Expand" type="button"><ArrowRight color="black" size={20} /></button>
                        </>
                    }
                    {                                     
                        <>
                            <li>
                                <div className="nav-item-div">
                                    <a className="nav-link navbar-text" href="#">Home</a>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item-div">
                                    <a className="nav-link navbar-text" href="#">Media</a>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item-div">
                                    <a className="nav-link navbar-text" href="#">Store</a>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item-div">
                                    <a className="nav-link navbar-text" href="#">Adoptions</a>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item-div">
                                    <a className="nav-link navbar-text" href="#">Pet Sitting</a>
                                </div>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
