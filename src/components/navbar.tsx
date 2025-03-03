import React from 'react';
const Navbar: React.FC = () => {
    return (
        <>
            <nav id="sidebar" className="game-navbar">
                <ul className="list-unstyled components mb-5">
                    <li className="token-platform">
                        <a href="#">
                            <img src="assets/images/logo/logo.png" alt="" />
                            <div className="text">
                                <strong>$@R@</strong>
                                <span>About Platform</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="list-unstyled components mb-5">
                    <li>
                        <a href="#"><span className="fa fa-home"></span><span> Login/Signup</span></a>
                    </li>
                </ul>
                <ul className="list-unstyled components mb-5">
                    <li>
                        <a href="#"><span className="fa fa-home"></span><span> Challanges</span></a>
                    </li>
                    <li>
                        <a href="#"><span className="fa fa-user"></span><span>VIP</span></a>
                    </li>
                </ul>
            </nav>
            <div className="mobile-navigation game-nav">
                <ul>
                    <li>
                        <a href="javascript:void(0)" id="sidebarCollapseMobile">
                            <i className="fa fa-bars"></i>
                            <span>Menu</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i className="fa fa-home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i className="fa fa-gamepad"></i>
                            <span>Games</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i className="fa fa-bell"></i>
                            <span>Notification</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i className="fa fa-wallet"></i>
                            <span>Wallet</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;