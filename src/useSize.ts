import isNull from "lodash/isNull";
import React, { useEffect, useState } from "react";

export default function useSize(ref: React.MutableRefObject<HTMLElement>)
{
    const [size, setSize] = useState<DOMRectReadOnly>()

    useEffect(() => {
        if(isNull(ref.current)) return () => {}
        const observer = new ResizeObserver(([entry]) => {setSize(entry.contentRect)})
        observer.observe(ref.current)

        return () => observer.disconnect()
    })

    return size
}