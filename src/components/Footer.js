import React from 'react';
import './Footer.css'



function Footer() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <footer align="center">
                    <div className="socialbtns">
                        <ul>
                            <li><a href="https://github.com/farhan-begg/mylife" className="fa fa-lg fa-github"></a></li>
                        </ul>
                    </div>
                    &copy;{new Date().getFullYear()} My Life Inc | All rights reserved | Terms of Service | Privacy
                 </footer>

            </div>
        </div>


    );
}

export default Footer;