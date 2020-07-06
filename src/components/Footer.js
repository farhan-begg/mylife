import React from 'react';
import './Footer.css'



function Footer() {
    return (
        <div className="page-container">
            <div className="conent-wrap">
                <div className='main-footer'>
                    <div className="container-1">
                        
                        {/* Column 1 */}
                        {/* <div ClassName="left-col">
                            <p>Contact US</p>
                            <ul className='list-unstyled'>
                                <li> About</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li> Lorem Ipsum</li> 
                            </ul>
                        </div> */}
                        {/* Column 2 */}
                        {/* <div ClassName="left-col">
                            <p>Contact US</p>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='https://github.com/farhan-begg/mylife'>Github</a>
                                </li>
                                <li>Lorem Ipsum</li>
                                <li> Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li> Lorem Ipsum</li>
                            </ul>
                        </div> */}
                        {/* Column 3 */}
                        {/* <div ClassName="left-col">
                            <p>Contact US</p>
                            <ul className='list-unstyled'>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li> Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li> Lorem Ipsum</li>
                            </ul>
                        </div> */}
   




                        <hr></hr>

                    </div>
                    <footer align="center">
                        &copy;{new Date().getFullYear()} My Life Inc | All rights reserved | Terms of Service | Privacy
                 </footer>


                </div>
            </div>
            <div class="socialbtns">
            <ul>
                {/* <li><a href="https://www.facebook.com/" class="fa fa-lg fa-facebook"></a></li>
                <li><a href="https://twitter.com/explore" class="fa fa-lg fa-twitter"></a></li>
                <li><a href="#" class="fa fa-lg fa-google-plus"></a></li> */}
                <li><a href="https://github.com/farhan-begg/mylife" class="fa fa-lg fa-github"></a></li>
                {/* <li><a href="https://www.linkedin.com/" class="fa fa-lg fa-linkedin"></a></li> */}
            </ul>
        </div>
        </div>


    );
}

export default Footer;