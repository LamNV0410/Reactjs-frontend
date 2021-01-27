import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <img src='/images/logo.png' width="125px" alt="infomation" />
                    </div>
                    <nav>
                        <ul id="menu-item">
                            <li><a href='/'>Home</a></li>
                            <li><a href='/products'>Products</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/contact'>Contact</a></li>
                            <li><a href='/account'>Account</a></li>
                        </ul>
                    </nav>
                    <a href='/cart'>
                        <img src="/images/cart.png" width="30px" height="30px" alt="infomation" />
                    </a>
                    <img src="images/menu.png"
                        alt="infomation"
                        className="nenu-icon"
                    // onClick="menutoggle()"   
                    />
                </div>
                {props.isHomePage ? <div className="row">
                    <div className="col-2">
                        <h1>Give Your Workout <br /> A New Style</h1>
                        <p>Success isn't always about greateness. It's about consistency
                            . Consistent <br /> hard work gains success.
                                Greatness will come.
                    </p>
                        <a href='/explore' className="btn">Explore Now →</a>
                    </div>
                    <div className="col-2">
                        <img src="images/image1.png" alt='infomation' />
                    </div>
                </div> : ''}
            </div>
        </div>
    );
}

export default Header;