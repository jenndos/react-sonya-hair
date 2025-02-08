// import React from 'react';
// import Home from "./pages/Home.jsx";
// import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
// import About from "./pages/About.jsx";
// import RootLayout from "./layout/RootLayout.jsx";
// import ClientsLayout from "./layout/ClientsLayout.jsx";
// import NotFound from "./components/NotFound.jsx";
// import PricesLayout from "./layout/PricesLayout.jsx";
//
// const App = () => {
//
//     const router = createBrowserRouter(
//         createRoutesFromElements(
//             <Route path='/' element={<RootLayout />}>
//                 <Route index element={<Home />} />
//                 <Route path='about' element={<About />} />
//                 <Route path='clients' element={<ClientsLayout />} />
//                 <Route path='prices' element={<PricesLayout />} />
//                 <Route path='*' element={<NotFound />}/>
//             </Route>
//         )
//     )
//
//     return (
//         <RouterProvider router={router}/>
//     );
// };
//
// export default App;

import React, { Suspense } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// Lazy load all components
const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const RootLayout = React.lazy(() => import("./layout/RootLayout.jsx"));
const ClientsLayout = React.lazy(() => import("./layout/ClientsLayout.jsx"));
const NotFound = React.lazy(() => import("./components/NotFound.jsx"));
const PricesLayout = React.lazy(() => import("./layout/PricesLayout.jsx"));

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={
                    <Suspense fallback={<div>Loading layout...</div>}>
                        <RootLayout />
                    </Suspense>
                }
            >
                <Route
                    index
                    element={
                        <Suspense fallback={<div>Loading home...</div>}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="about"
                    element={
                        <Suspense fallback={<div>Loading about...</div>}>
                            <About />
                        </Suspense>
                    }
                />
                <Route
                    path="clients"
                    element={
                        <Suspense fallback={<div>Loading clients...</div>}>
                            <ClientsLayout />
                        </Suspense>
                    }
                />
                <Route
                    path="prices"
                    element={
                        <Suspense fallback={<div>Loading prices...</div>}>
                            <PricesLayout />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<div>Loading not found...</div>}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
