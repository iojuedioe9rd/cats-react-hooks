import { useState } from "react"
import useEventListener from "./useEventListener"

export type Size = {
    width: number
    height: number
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<Size>({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEventListener("resize",async (e: Event) => {
        await setWindowSize({width: window.innerWidth, height: window.innerHeight})
    })

    return windowSize
}