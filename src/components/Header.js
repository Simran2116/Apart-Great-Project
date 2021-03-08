import React, { Component } from 'react';
import logo from './../assets/Site_logo.svg';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="image">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h1> Apart&Great </h1>
                            <h2> what sets you APART is what that makes you GREAT </h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="btn">
                                <button>
                                    <a>
                                        Join Us
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}