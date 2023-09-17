import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/body";
import Footer from "./components/Footer";
import './style.css'


// 3. Functional component 
const App = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer/>
            {/* header -
                       navbar - 
                            logo, search bar navbar tab, */}
            {/* body -
                    card - card details
                          
                           img, name, price, discription */}
            {/* footer- 
                       links */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)