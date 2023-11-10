import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @returns {*}
 */
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  function handleOnline() {
    setIsOnline(true);
  }
  function handleOffline() {
    setIsOnline(false);
  }

  useEventListener("online", () => {
    handleOnline();
  });
  useEventListener("offline", () => {
    handleOffline();
  });
  return isOnline;
}
