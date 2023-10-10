import { useEffect, useState } from "react";

const useOnline = () => {
    // for managing state
    const [isOnline, setIsOnline] = useState(true);

    // want to show only once
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true)
        }

        const handleOffline = () => {
            setIsOnline(false)
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        // when we go to any another page than we should clear the event listener otherwise browser keep holding event listener and it can blow up.
        return () => {
            window.removeEventListener('online', handleOnline);

            window.removeEventListener('offline', handleOffline)
        }
    }, [])
    //return boolean true and false
    return isOnline;
}

export default useOnline;