import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const prevScrollY = useRef(0);
    const scrollThreshold = 5;
    const navigate = useNavigate();
    const isMounted = useRef(true); // Add mounted ref

    useEffect(() => {
        const handleScroll = () => {
            if (!isMounted.current) return; // Prevent state updates if unmounted

            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setIsVisible(true);
                prevScrollY.current = currentScrollY;
                return;
            }

            const scrollDifference = currentScrollY - prevScrollY.current;

            if (Math.abs(scrollDifference) < scrollThreshold) return;

            setIsVisible(scrollDifference < 0);
            prevScrollY.current = currentScrollY;
        };

        // Add passive event listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            isMounted.current = false; // Set mounted to false on cleanup
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className='navbar'
            style={{
                transform: `translateY(${isVisible ? '0' : '-100%'})`,
                transition: 'transform 0.3s ease-in-out',
            }}
        >
            <ul>
                <NavLink to='/about'><li>Обо мне</li></NavLink>
                <NavLink to='/prices'><li>Цены</li></NavLink>
                <NavLink to='/clients'><li>Мои клиенты</li></NavLink>
                <li>
                    <p className="address">
                        г.&nbsp;Казань, ул.&nbsp;Кави&nbsp;Наджми, д.&nbsp;8, офис.&nbsp;23<br/>
                        +7&nbsp;960&nbsp;087&nbsp;2086
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
//
// const Navbar = () => {
//     const [isVisible, setIsVisible] = useState(true);
//     const prevScrollY = useRef(0);
//     const scrollThreshold = 5; // Adjust sensitivity
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
//
//             // Always show navbar at the top of the page
//             if (currentScrollY <= 0) {
//                 setIsVisible(true);
//                 prevScrollY.current = currentScrollY;
//                 return;
//             }
//
//             const scrollDifference = currentScrollY - prevScrollY.current;
//
//             // Ignore small scroll movements
//             if (Math.abs(scrollDifference) < scrollThreshold) return;
//
//             if (scrollDifference > 0) {
//                 // Scrolling down
//                 setIsVisible(false);
//             } else {
//                 // Scrolling up
//                 setIsVisible(true);
//             }
//
//             // Update previous scroll position
//             prevScrollY.current = currentScrollY;
//         };
//
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//
//     return (
//         <div
//             className='navbar'
//             style={{
//                 position: 'fixed',
//                 top: isVisible ? 0 : '-100px', // Adjust '-100px' to match your navbar height
//                 width: '100%',
//                 transition: 'top 0.3s',
//                 zIndex: 1000,
//             }}
//         >
//             <ul>
//                 <NavLink to='/about'><li>Обо мне</li></NavLink>
//                 <NavLink to='/prices'><li>Цены</li></NavLink>
//                 <NavLink to='/clients'><li>Мои клиенты</li></NavLink>
//                 <li>
//                     <p>г.&nbsp;Казань, ул.&nbsp;Салимжанова, д.&nbsp;25<br/>+7&nbsp;960&nbsp;087&nbsp;2086</p>
//                 </li>
//             </ul>
//         </div>
//     );
// };
//
// export default Navbar;

// import React from 'react';
// import {NavLink, useNavigate} from "react-router-dom";
//
// const Navbar = () => {
//
//     const navigate = useNavigate();
//
//     return (
//         <div className='navbar'>
//             <ul>
//                 <NavLink to='/about'><li>Обо мне</li></NavLink>
//                 <NavLink to='/prices'><li>Цены</li></NavLink>
//                 <NavLink to='/clients'><li>Мои клиенты</li></NavLink>
//                 <li><p>г.&nbsp;Казань, ул.&nbsp;Салимжанова, д.&nbsp;25<br/>+7&nbsp;960&nbsp;087&nbsp;2086</p></li>
//             </ul>
//         </div>
//     );
// };
//
// export default Navbar;
