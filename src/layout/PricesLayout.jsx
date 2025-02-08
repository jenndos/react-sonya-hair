import React from 'react';
import Prices from "../pages/Prices.jsx";
import { Outlet } from "react-router-dom";

const PricesLayout = () => {
    return (
        <>
            <Prices />
            <Outlet />
        </>
    );
};

export default PricesLayout;
