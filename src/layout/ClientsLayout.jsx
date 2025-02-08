import React from 'react';
import Clients from "../pages/Clients.jsx";
import { Outlet } from "react-router-dom";

const ClientsLayout = () => {
    return (
        <>
            <Clients />
            <Outlet />
        </>
    );
};

export default ClientsLayout;
