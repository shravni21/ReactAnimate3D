import React from "react";
import Iphone from "../assets/images/iphone-14.png"
import HoldingIphone from '../assets/images/iphone-hand.png'
function Jumbotron() {
    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        if ('scrollTo' in window) {
            window.scrollTo({
                top: element.getBoundingClientRect().top,
                left: 0,
                behavior: 'smooth'
            });
        }


    }

    return (
        <div className="jumbotron-section wrapper" >
            <h2 className='title'>New</h2>
            <img classname='logo' src={Iphone} alt="iPhone 14 and iPhone 14 Plus" />
            <p className='text'>Big and Bigger</p>
            <span className="description">From ₹79900.00* before trade-in</span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link" onClick={handleLearnMore}>Learn More</a>

                </li>

            </ul>
            <img className='iphone-img' src={HoldingIphone} alt="I=phone" />
        </div>

    );
}

export default Jumbotron;