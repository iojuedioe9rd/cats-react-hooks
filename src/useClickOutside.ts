import { isNull } from "lodash"
import useEventListener from "./useEventListener"
import React from "react"

export function assertIsNode(e: EventTarget | null) {
    

    if (!e || !("nodeType" in e)) {
        throw new Error(`Node expected`);
    }
}

export default function useClickOutside(ref: React.MutableRefObject<HTMLElement>, cb: (event: MouseEvent) => (void | Promise<void>))
{
    
    useEventListener("click", 
    async (e: MouseEvent) => {
        assertIsNode(e.target)
        if (isNull(ref.current) || ref.current.contains(e.target as any)) return
        await cb(e)
    }, document)
}