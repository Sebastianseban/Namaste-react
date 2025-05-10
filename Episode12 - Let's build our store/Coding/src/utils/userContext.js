import { createContext } from "react";


const userContext = createContext({
    loggedInUser : "Defualt"
})

export default userContext;