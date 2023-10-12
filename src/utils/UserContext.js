import { createContext } from "react";

// take the data for which we want to manage the state
const UserContext = createContext({
    user: {
        name: 'Dummy name',
        email: 'dummy@gmail.com'
    }
})

export default UserContext;

