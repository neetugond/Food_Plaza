import React from "react";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./ProfileFunctional";

const About = () => {
    return (
        <>
        <div>
            <h1>About Us</h1>
            <p>food plaza is a grea place to order tasty food from your favorite restaurant</p>
                <ProfileFunctional name={ "React functional"} />
            <ProfileClass name="React class" />
                
            </div>
        </>
    )
}

export default About