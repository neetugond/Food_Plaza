import { createContext } from "react";

// take the data for which we want to manage the state
const UserContext = createContext({
    user: {
        name: 'Dummy name',
        email: 'dummy@gmail.com'
    }
})
//note: react doesn't track the name of the context, whenever we use it will give common name in our devtool component "Context.Provider" but we can change the name

UserContext.displayName ="UserContext"

export default UserContext;

