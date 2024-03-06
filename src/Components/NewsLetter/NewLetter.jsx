import React from "react";
import './NewLetter.css';

const NewLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive On Your Email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email Id" />
                <button>Subcribe</button>
            </div>
        </div>
    )
}

export default NewLetter;