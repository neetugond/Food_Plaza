import React from "react";
import  ReactDOM  from "react-dom/client";

// 2. JSX => React.createElement => Object => HTML(DOM)
const heading = (
    <h1 id="title" key="h1">
        Namaste React
    </h1>
)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)

