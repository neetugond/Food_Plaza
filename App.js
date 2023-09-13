import React from "react";
import  ReactDOM  from "react-dom/client";

// 2. JSX => React.createElement => Object => HTML(DOM)
const Heading = ()=>(
    <h1 id="title" key="h1">
        Namaste React
    </h1>
)


// 3. Functional component 
const HeaderComponent = () => {
    return (
        <div>
            <Heading/> //component composition - using component inside another component
            <h1>Namaste React Functional Component</h1>
            <h2>This is a h2 tag</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeaderComponent/>)