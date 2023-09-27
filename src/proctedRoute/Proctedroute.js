import { useAuthContext } from "../Context/Auth"
import { Navigate } from "react-router-dom"
const Proctedroute = ({children}) => {
    const {currentUser} = useAuthContext()
    
    if(!currentUser){
     return <Navigate to="/login"/>
    }else{
        return children;
    }
}

export default Proctedroute;
