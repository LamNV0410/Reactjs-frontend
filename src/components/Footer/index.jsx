import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>DownLoad App for Android and IOS mobile phone!</p>
                        <div className="app-logo">
                            <img src="/images/play-store.png" alt="infomation-show"/>
                            <img src="/images/app-store.png" alt="infomation-show"/>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src="/images/logo-white.png" alt="infomation-show"/>
                        <p>Our Purpose Is To Sustainably Make the Pleasure and Benfits of Sprot
                        Accessible to the Many
                        </p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Usefull Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Renturn Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">Copyright 2020 - Lovenco0410@gmail.com</p>
            </div>
        </div>
    );
}

export default Footer;