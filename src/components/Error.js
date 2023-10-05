import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    console.log(err); 
    return (
        <div className="error-not-found">
            <div className="error-404">
                <h1>{err.status}</h1>
                <h1> {err.statusText}</h1>
            </div>
           
            <h2>{ err.data}</h2>
        </div>
    )
}

export default Error