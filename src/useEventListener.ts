import { useEffect, useRef } from "react";


/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @param {string} eventType
 * @param {(a: any) => (void | Promise<void>)} callback
 * @param {EventTarget} [element=window]
 * @returns {any, element?: EventTarget) => void}
 */
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