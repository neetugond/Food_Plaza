import React from "react";
import ReactDom from 'react-dom'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import './style.css'



// 3. Functional component 
const App = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement : <Error/>
    
    }, {
        path: '/about',
        element: (
            <About/>
        )
    }

])
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={ appRouter} />
)


