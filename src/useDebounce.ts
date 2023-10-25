import { useEffect } from "react";
import { useTimeout } from "./useTimeout";
import React from "react";

export function useDebounce(callback: () => void |  Promise<void>, delay: number, dependencies: React.DependencyList)
{
    const {reset, clear} = useTimeout(callback, delay)

    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}