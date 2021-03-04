import React from 'react'
import { Link } from 'react-router-dom';

export default function SignedInMenu({signOut}) {
    return (
        <>
            <div className="dashboard-setting user-notification">
                        <div className="dropdown">
                            <a className="dropdown-toggle no-arrow" href="" data-toggle="right-sidebar">
                                <i className="dw dw-settings2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="user-notification">
                        <div className="dropdown">
                            <a className="dropdown-toggle no-arrow" href="#1" role="button" data-toggle="dropdown">
                                <i className="icon-copy dw dw-notification"></i>
                                <span className="badge notification-active"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="notification-list mx-h-350 customscroll">
                                    <ul>
                                        <li>
                                            <a href="#1">
                                                <img src="../../assets/images/im1.jpg" alt="" />
                                                <h3>John Doe</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#1">
                                                <img src="assets/vendors/images/photo1.jpg" alt="" />
                                                <h3>Lea R. Frith</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#1">
                                                <img src="assets/vendors/images/photo2.jpg" alt="" />
                                                <h3>Erik L. Richards</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#1">
                                                <img src="assets/vendors/images/photo3.jpg" alt="" />
                                                <h3>John Doe</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#1">
                                                <img src="assets/vendors/images/photo4.jpg" alt="" />
                                                <h3>Renee I. Hansen</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#1">
                                                <img src="assets/vendors/images/img.jpg" alt="" />
                                                <h3>Vicki M. Coleman</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-info-dropdown">
                        <div className="dropdown">
                            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                <span className="user-icon">
                                    <img src="assets/vendors/images/photo1.jpg" alt="" />
                                </span>
                                <span className="user-name">Ross C. Lopez</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                <a className="dropdown-item" href="profile.html"><i className="dw dw-user1"></i> Profile</a>
                                <a className="dropdown-item" href="profile.html"><i className="dw dw-settings2"></i> Setting</a>
                                <a className="dropdown-item" href="faq.html"><i className="dw dw-help"></i> Help</a>
                                <Link to="" className="dropdown-item" onClick={signOut} href="login.html"><i className="dw dw-logout"></i> Log Out</Link>
                            </div>
                        </div>
                    </div>
        </>
    );
}