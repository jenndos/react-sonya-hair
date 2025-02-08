import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default RootLayout;


// import React from 'react';
// import Navbar from "../components/Navbar.jsx";
// import Headroom from "react-headroom/src";
// import {Outlet} from "react-router-dom";
//
// const RootLayout = () => {
//     return (
//         <>
//             <Headroom>
//                 <Navbar />
//             </Headroom>
//             <Outlet />
//         </>
//     );
// };
//
// export default RootLayout;
