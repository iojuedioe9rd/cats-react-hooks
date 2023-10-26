import { useEffect, useRef } from "react";


export default function useEventListener(
    eventType: string,
    callback: (a: any) => (void | Promise<void>),
    element: EventTarget = window
)
{
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        const handler = (e: any) => callbackRef.current(e)
        element.addEventListener(eventType, handler)

        return () => element.removeEventListener(eventType, handler)
    }, [eventType, element])
}