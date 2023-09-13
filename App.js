import React from "react";
import  ReactDOM  from "react-dom/client";

// React.createElement => Object => HTML(DOM)
const h1 = React.createElement("h1", {
    id: "title1",
    key:"h1"
    
}, "Namaste React")

const h2 = React.createElement("h2", {
    id: "title2",
    key:"h2"

    
}, "Namaste js")

const div = React.createElement('div', {
  className: "container"  
}, h1, h2)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(div)

// JSX => React.createElement => Object => HTML(DOM)