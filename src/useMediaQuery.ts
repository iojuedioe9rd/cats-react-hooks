import { useEffect, useState } from "react";
import useEventListener from "./useEventListener";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @param {string} mediaQuery
 * @returns {*}
 */
export default function useMediaQuery(mediaQuery: string)
{
    const [isMatch, setIsMatch] = useState(false)
    const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null)

    useEffect(() => {
        const list = window.matchMedia(mediaQuery)
        setMediaQueryList(list)
        setIsMatch(list.matches)
    }, [mediaQuery])

    if(mediaQueryList !== null)
    {
        useEventListener("change", (e: MediaQueryList) => setIsMatch(e.matches), mediaQueryList)
    }

    return isMatch
}