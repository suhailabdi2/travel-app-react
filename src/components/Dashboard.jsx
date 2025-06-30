import { useState } from "react";
import SignUp from "./SignUp";

function Dashboard(){
   
    const [openSignUpModal,setopenSignUpModal]=useState(false);
    return(
        <div className="nav">
            <div>
                <SignUp openSignUpModal={openSignUpModal} setopenSignUpModal={setopenSignUpModal}/>
            </div>
            <h1>travel</h1>
            <button className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className="nav-links">
                <li>Services</li>
                <li>Destinations</li>
                <li>Newsletter</li>
                <li>SiteMap</li>
            </ul>
            <button className="signUp" onClick={() =>{
                setopenSignUpModal(true);
                console.log(openSignUpModal);
            }}>Sign Up</button>
        </div>
    )
}
export default Dashboard;