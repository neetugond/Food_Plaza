import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import './style.css'
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";



// 3. Functional component 
const App = () => {
    return (
        <div>
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {

                path: '/',
                element: <Body />

            },
            {

                path: '/about',
                element: <About />

            },
            {

                path: '/contact',
                element: <Contact />

            },
            {
                //dynamic url
                path: '/restaurant/:id',
                element:<RestaurantMenu/>
            }
            
        ]

    },


])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={appRouter} />
)


