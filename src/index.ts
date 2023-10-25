import { useLocalStorage as useLocalStorageTMP } from "./useLocalStorage";
import { useFetch as useFetchTMP } from "./useFetch";
import { useOnlineStatus as useOnlineStatusTMP } from "./useOnlineStatus";
import {useJSON as useJSONTMP} from "./useJSON"
import { useToggle as useToggleTMP } from "./useToggle";
import { useTimeout as useTimeoutTMP } from "./useTimeout";
import { useDebounce as useDebounceTMP } from "./useDebounce";
import React from "react";
import { useUpdateEffect as useUpdateEffectTMP } from "./useUpdateEffect";
import { useArray as useArrayTMP, FilterCallback } from "./useArray";
import {usePrevious as usePreviousTMP} from "./usePrevious"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T))
{
    return useLocalStorageTMP(key,initialValue)
}

export function useFetch<T>(url: string | URL)
{
    return useFetchTMP<T>(url.toString())
}

export function useOnlineStatus()
{
    return useOnlineStatusTMP()
}

export function useJSON<T>(url: string | URL)
{
    return useJSONTMP<T>(url)
}

export function useToggle(defaultValue?: boolean)
{
    var v = typeof(defaultValue) === "undefined" ? false : defaultValue
    return useToggleTMP(v)
}

export function useTimeout(callback: () => void |  Promise<void>, delay: number): {
    reset: () => void;
    clear: () => void;
}
{
    return useTimeoutTMP(callback, delay)
}

export function useDebounce(callback: () => void |  Promise<void>, delay: number, dependencies: React.DependencyList | undefined)
{
    var dep = dependencies === undefined ? [] as React.DependencyList: dependencies

    
    useDebounceTMP(callback, delay, dep)
}

export function useUpdateEffect(callback: React.EffectCallback, dependencies: React.DependencyList | undefined)
{
    return useUpdateEffectTMP(callback, dependencies)
}

export function useArray<T>(defaultValue: T[] | (() => T[])): { array: T[]; set: React.Dispatch<React.SetStateAction<T[]>>; push: (element: T) => void; filter: (callback: FilterCallback<T>) => void; update: (index: number, newElement: T) => void; remove: (index: number) => void; clear: () => void; }
{
    return useArrayTMP<T>(defaultValue)
}

export function usePrevious<T>(value: T)
{
    return usePreviousTMP(value)
}