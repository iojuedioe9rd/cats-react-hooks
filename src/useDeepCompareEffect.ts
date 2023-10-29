import { EffectCallback, useEffect, useRef } from "react";
import {isEqual} from "lodash"

export default function useDeepCompareEffect(callback: EffectCallback, dependencies?: React.DependencyList)
{
    const currentDependenciesRef = useRef<React.DependencyList | undefined>()

    if(!isEqual(currentDependenciesRef.current, dependencies))
    {
        currentDependenciesRef.current = dependencies
    }

    useEffect(callback, [currentDependenciesRef.current])
}