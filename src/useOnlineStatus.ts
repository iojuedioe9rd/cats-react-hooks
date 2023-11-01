import { useState, useEffect,  } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @returns {*}
 */
export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

    
    
    useEffect(() => {
      function handleOnline() {
        setIsOnline(true);
      }
      function handleOffline() {
        setIsOnline(false);
      }
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);
    return isOnline;
  }