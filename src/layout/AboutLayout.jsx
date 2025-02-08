import React from 'react';
import About from "../pages/About.jsx";
import { Outlet } from "react-router-dom";

const AboutLayout = () => {
    return (
        <>
            <About />
            <Outlet />
        </>
    );
};

export default AboutLayout;
