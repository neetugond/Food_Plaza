import { useEffect, useState } from "react";

const useOnline = () => {
    // for managing state
    const [isOnline, setIsOnline] = useState(true);
    
    // want to show only once
    useEffect(() => {
        window.addEventListener('online', () => {
            setIsOnline(true)
        });
        window.addEventListener('offline', () => {
            setIsOnline(false)
        }); 
    },[])
    //return boolean true and false
    return isOnline;
}

export default useOnline;