import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='Footer-section'>
            <div className="Footer-item">
                <p>Follow us on:</p>
                <div className="social-icons">
                    <a 
                        href="https://www.linkedin.com/company/befinace" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn page"
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/awxxhkom.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ebe6ef,tertiary:#0a66c2"
                            style={{ width: "50px", height: "50px" }}
                            aria-label="LinkedIn icon"
                        ></lord-icon>
                    </a>
                </div>
            </div>
            <div className="Footer-item">
                <p>Download the mobile app now</p>
                <div className='appstore'>
                    <a 
                        href="https://play.google.com/store/apps/details?id=com.befinace.app&hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Download the mobile app from Google Play Store"
                    >
                        <img 
                            src="/finace-website/GetItOnGooglePlay_Badge_Web_color_English.png" 
                            alt="Get it on Google Play button image" 
                            aria-label="Google Play Store badge"
                        />
                    </a>
                </div>
            </div>
            <div className="Footer-item">© Copyright Finace.<br/>All Rights Reserved</div>
        </div>
    );
};

export default Footer;