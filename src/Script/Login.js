import { Button } from '@material-ui/core'
import React from 'react'
import "../Style/Login.css"
import { auth, provider } from "./firebase"
import companyLogo from "../Data/CompanyLogo.png"


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <header>
                <img alt="LogoImage" id="LogoImage" src={companyLogo}/>
                <div id="headerDiv">              
                    <nav class="NavBar">
                        <ul class="NavMenu">
                            <li><a href="./index">Home</a></li>
                            <li><a href="./HTMLPages/About">About</a></li>
                            <li id="NavButton"><a href="https://www.weenks.ml/Home/">Log In</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="ButtonContainer">
                <Button className="btnLog" onClick={signIn}> Log In </Button>
            </div>
            <footer>
                <div class="FooterContainer">
                    <div class="Footer">
                        <div class="FooterHeading Footer1">
                            <h2>About Us</h2>
                            <a href="./HTMLPages/About">About</a>                       
                            <a href="./HTMLPages/TermsOfService">Terms Of Service</a>
                        </div>
                        <div class="FooterHeading Footer2">
                            <h2>Contact Us</h2>
                            <a href="./HTMLPages/Support">Support</a>
                            <a href="./HTMLPages/Contact.html">Contact</a>
                        </div>
                        <div class="FooterHeading Footer3">
                            <h2>Social Media</h2>
                            <a href="">Instagram</a>
                            <a href="">Twitter</a>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
        </footer>
        </div>
    )
}

export default Login;