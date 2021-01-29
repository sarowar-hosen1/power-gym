import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12">
                        <h2 className='text-center text-brand text-white'>POWER <span>X</span></h2>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="footer-sec">
                                    <h5>Need Help?</h5>
                                    <ul className="list-unstyled">
                                        <li>Help center</li>
                                        <li>Email support</li>
                                        <li>Live Chat</li>
                                        <li>Gift Certificate</li>
                                        <li>Send us feedback</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="footer-sec">
                                    <h5>Digital Resources</h5>
                                    <ul className="list-unstyled">
                                        <li>Articles</li>
                                        <li>Ebooks</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="footer-sec">
                                    <h5>Join Our Newsletter</h5>
                                    <ul className="list-unstyled">
                                        <li>Prothom-alo.com</li>
                                        <li>News24.com</li>
                                        <li>BBCNEWS.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="footer-sec">
                                    <h5>Connect with us</h5>
                                    <div className='d-flex'>
                                        <i><FaFacebook /></i>
                                        <i><FaYoutube /></i>
                                        <i><FaTwitter /></i>
                                        <i><FaInstagram /></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center text-white'><small>@ 2021 My Website. All Rights Reserved</small></p>
        </div>
    );
};

export default Footer;