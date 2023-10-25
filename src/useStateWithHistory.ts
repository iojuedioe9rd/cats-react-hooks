import React from "react";
import { useCallback, useRef, useState } from "react";

export function useStateWithHistory<T>(
    defaultValue: T | (() => T),
    {capacity = 10}: {capacity: number}
) {
    const [value, setValue] = useState(defaultValue)
    const historyRef = useRef([value])
    const pointerRef = useRef(0)

    const set = useCallback<any>(
         v => {
          const resolvedValue = typeof v === "function" ? v(value) : v
          if (historyRef.current[pointerRef.current] !== resolvedValue) {
            if (pointerRef.current < historyRef.current.length - 1) {
              historyRef.current.splice(pointerRef.current + 1)
            }
            historyRef.current.push(resolvedValue)
    
            while (historyRef.current.length > capacity) {
              historyRef.current.shift()
            }
            pointerRef.current = historyRef.current.length - 1
          }
          setValue(resolvedValue)
        },
        [capacity, value]
    ) as React.Dispatch<React.SetStateAction<T>>

    const back = useCallback(() => {
        if(pointerRef.current <= 0) { throw new Error("back function called when pointer <= 0")}
        pointerRef.current--
        setValue(historyRef.current[pointerRef.current])


    }, [])

    const forward = useCallback(() => {
        if(pointerRef.current >= historyRef.current.length - 1) { throw new Error(`forward function called when pointer >= ${historyRef.current.length}`)}
        pointerRef.current++
        setValue(historyRef.current[pointerRef.current])

    }, [])

    const go = useCallback((index: number) => {
        if(index < 0 || index >= historyRef.current.length - 1) throw new Error(`Invalid index. The index is ${index.toString()}`)
        pointerRef.current = index
        setValue(historyRef.current[pointerRef.current])
    }, [])

    return [value, set, {
        history: historyRef.current,
        pointer: pointerRef.current,
        back,
        forward,
        go,
    }]
}