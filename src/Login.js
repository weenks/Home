import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase"

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className="login_logo">
                <img src='https://fontmeme.com/images/discord-logo-font.png' alt='discord logo' />
            </div>
            <Button className="btnLog" onClick={signIn}> Sign in </Button>
        </div>
    )
}

export default Login;