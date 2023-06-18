import React from "react";

function DisplaySection({ triggrPreview }) {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    return (

        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">Brilliant.</p>
            <span className="description">A display that's 2x Brighter in the sun.</span>
            <button className="button" onClick={triggrPreview}>Try me!</button>
            <button className="back-button" onClick={handleScrollToTop}>TOP</button>
        </div>
    );
}

export default DisplaySection;