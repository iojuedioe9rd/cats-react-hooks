import React, { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import { useLocalStorage } from "./useStorage";

export default function useDarkMode(): [boolean, React.Dispatch<React.SetStateAction<boolean | undefined>>]
{
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    const [darkMode, setDarkMode] = useLocalStorage<boolean>("useDarkMode", prefersDarkMode)
    const enabled = darkMode ?? prefersDarkMode

    useEffect(() => {
        document.body.classList.toggle("dark-mode", enabled)
    }, [enabled])

    return [enabled, setDarkMode]
}