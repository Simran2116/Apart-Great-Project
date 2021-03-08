import React from 'react';
import imgsir from './../assets/Sir_image.jpg';
import prabh from './../assets/Prabh_image.jpg';
import imgsir1 from './../assets/Sir1_image.jpg';
import './Card.css';

function Card({ title, imageUrl, body }) {
    return (
        <div className="container">
            <div className="row">


                <div className="col-lg-4">
                    <div className="card-container">

                        <div className="image-container">
                            <img src={imgsir} alt="" />
                        </div>



                        <div className="card-content">
                            <div className="card-title">
                                <h3> Maninder Singh </h3>
                                <h4> Expertise: Front End Development </h4>
                            </div>
                        </div>


                        <div className="btn">
                            <button>
                                <a>
                                    View Profile
                            </a>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4">
                    <div className="card-container">

                        <div className="image-container">
                            <img src={prabh} alt="" />
                        </div>



                        <div className="card-content">
                            <div className="card-title">
                                <h3> Prabhjot Singh </h3>
                                <h4> Expertise: AutoCAD Designing </h4>
                            </div>
                        </div>


                        <div className="btn">
                            <button>
                                <a>
                                    View Profile
                            </a>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4">
                    <div className="card-container">

                        <div className="image-container">
                            <img src={imgsir1} alt="" />
                        </div>



                        <div className="card-content">
                            <div className="card-title">
                                <h3> Sumit Vats </h3>
                                <h4> Expertise: Digital Marketing and SEO </h4>
                            </div>
                        </div>


                        <div className="btn">
                            <button>
                                <a>
                                    View Profile
                            </a>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Card;
