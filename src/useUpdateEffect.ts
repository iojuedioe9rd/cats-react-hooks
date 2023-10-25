import React, { useEffect, useRef } from "react";

export function useUpdateEffect(callback: React.EffectCallback, dependencies: React.DependencyList | undefined)
{
    const firstRenderRef = useRef(true)

    useEffect(() => {
        if (firstRenderRef.current)
        {
            firstRenderRef.current = false
            return () => {}
        }
        
        return callback()
        
    }, dependencies)
}