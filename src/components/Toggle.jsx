import React, { useState } from 'react';
import arrowUp from "../assets/images/up-arrow.svg";

const Toggle = ({ show, header, content }) => {
    const [isOpen, setIsOpen] = useState(show);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div>
            <button className="service-header-wrapper" onClick={handleToggle}>
                <h2>{header}</h2>
                <img
                    src={arrowUp}
                    alt={isOpen ? "up-arrow" : "down-arrow"}
                    width="20px"
                    height="20px"
                    className={isOpen ? "" : "rotate"}
                />
            </button>
            {isOpen && (
                <div className="service-content-wrapper">
                    {content}
                </div>
            )}
        </div>
    );
}

export default Toggle;
