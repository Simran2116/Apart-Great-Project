import React from 'react';
import './Footer.css';


function Footer({ row, column, list }) {
    return (
        <div className="main-footer">
            <div classname="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h4> About Us </h4>
                        <p> At Apart&Great, we believe that there is always a better way to learn. We are very much passionate about it and want people to achieve their dreams. </p>
                    </div>
                    <div className="col-lg-6">
                        <h4> Connect </h4>
                        <ul className="list-unstyled">
                            <li>simranlamba21@gmail.com</li>
                            <li>9205745233</li>
                        </ul>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Footer;