import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <div className = 'Nav'> 
            <div className= "nav__contents">
                <img 
                className = "Nav__logo"
                    src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=5" 
                    alt="" 
                />

                <img 
                className = "nav__avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" 
                    alt=""
                />
            </div>  
        </div>
    )
}

export default Nav