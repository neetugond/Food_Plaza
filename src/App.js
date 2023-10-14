import { lazy, Suspense, useState } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import Store from './utils/Store'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import './style.css'
import Contact from "./components/Contact";
import Profile from "./components/ProfileFunctional";
import RestaurantMenu from "./components/RestaurantMenu";
import { RestaurantShimmer } from "./components/Shimmer";
import Cart from "./components/Cart";
// import UserContext from "./utils/UserContext";
// all this is same of making different bundle we do code spliting
// chunking
// code splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading
// dynamic import
const About = lazy(() => import('./components/About'))
// const VegRestaurant = lazy(() => import('./components/VegRestaurant'))

// 3. Functional component 
const App = () => {
    // // i want data dynamically from context
    // const [user, setUser] = useState({
    //     name: 'nitu gond',
    //     email: 'neetu@gmail.com'
    // });
    return (
        // 2 redux - wraping app with provider and pass store as a props, we want to used store now all oue app that's why
        <Provider store={Store}>
        {/* // data will be accessible in wrap component is provider
        <UserContext.Provider value={{
            //dummy data : dynamic data
            user: user,
            setUser: setUser
        }}> */}
            <Header />
            <Outlet />
            <Footer />
        {/* </UserContext.Provider> */}
        </Provider>
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
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]

            },
            {

                path: '/contact',
                element: <Contact />

            },
            {
                path: '/cart',
                element:<Cart/>
            },
            // {
            //     path: '/veg',
            //     element: <Suspense fallback={<RestaurantShimmer />}>
            //         <VegRestaurant />
            //     </Suspense>


            // },
            {
                //dynamic  configuration 
                path: '/restaurant/:id', //when path is this
                element: <RestaurantMenu />
                // show RestaurantMenu component
            }

        ]

    },


])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={appRouter} />
)


