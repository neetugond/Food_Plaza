import {useContext} from "react";
import UserContext from "../utils/UserContext";

function Footer() {
    const {user} = useContext(UserContext)
    return (
        <div className="footer-main">
            
            <h4>Food Plaza made by {user.name} - { user.email}</h4>
        </div>
    )
}

export default Footer