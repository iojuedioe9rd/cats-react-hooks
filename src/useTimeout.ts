import { useCallback, useEffect, useRef } from "react";





export function useTimeout(callback: () => void |  Promise<void>, delay: number) 
{
    const callbackRef = useRef(callback)
    const timeoutRef = useRef<number | NodeJS.Timeout>()

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay) 
    }, [delay])

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, [])

    useEffect(() => {
        set()
        return clear
    })

    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set])

    return {reset, clear}

}