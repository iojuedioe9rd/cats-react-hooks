import { useLocalStorage as useLocalStorageTMP, useSessionStorage as useSessionStorageTMP, useStorage as useStorageTMP } from "./useStorage";
import { useFetch as useFetchTMP } from "./useFetch";
import { useOnlineStatus as useOnlineStatusTMP } from "./useOnlineStatus";
import {useJSON as useJSONTMP} from "./useJSON"
import { useToggle as useToggleTMP } from "./useToggle";
import { useTimeout as useTimeoutTMP } from "./useTimeout";
import { useDebounce as useDebounceTMP } from "./useDebounce";
import React, { EffectCallback, SetStateAction } from "react";
import { useUpdateEffect as useUpdateEffectTMP } from "./useUpdateEffect";
import { useArray as useArrayTMP, FilterCallback } from "./useArray";
import {usePrevious as usePreviousTMP} from "./usePrevious"
import {useStateWithHistory as useStateWithHistoryTMP} from "./useStateWithHistory"
import useAsyncTMP from "./useAsync"
import useScriptTMP from "./useScript";
import useDeepCompareEffectTMP from "./useDeepCompareEffect"
import useEventListenerTMP from "./useEventListener";
import useOnScreenTMP from "./useOnScreen";
import useWindowSizeTMP from "./useWindowSize"
import useLoggerTMP, {LoggerConfig} from "./useLogger";
import useMediaQueryTMP from "./useMediaQuery"
import useGeolocationTMP from "./useGeolocation"
import useStateWithValidationTMP from "./useStateWithValidation"
import useSizeTMP from "./useSize";
import useEffectOnceTMP from "./useEffectOnce"
import useCanvasTMP, {useCanvasInput} from "./useCanvas"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T))
{
    return useLocalStorageTMP(key,initialValue)
}


export function useOnlineStatus()
{
    return useOnlineStatusTMP()
}

/**
 * @deprecated Use the Fetch Hook Instead
 */
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

export function useStateWithHistory<T>(
    defaultValue: T | (() => T),
    {capacity = 10}: {capacity: number}
) {
    return useStateWithHistoryTMP<T>(defaultValue, {capacity})
}

export function useSessionStorage<T>(key: string, initialValue: T | (() => T))
{
    return useSessionStorageTMP<T>(key, initialValue)
}

export function useStorage<T>(key: string, initialValue: T | (() => T), storageObject: Storage)
{
    return useStorageTMP<T>(key, initialValue, storageObject)
}

export function useAsync<T>(callback: () => Promise<SetStateAction<T | undefined>>, dependencies: React.DependencyList = [])
{
    return useAsyncTMP<T>(callback, dependencies)
}

export function useFetch<T>(url: string | URL, options: RequestInit = {}, dependencies: React.DependencyList = [])
{
    return useFetchTMP<T>(url.toString(), options, dependencies)
}

export function useScript(url: string | URL)
{
    return useScriptTMP(url.toString())
}

export function useDeepCompareEffect(callback: EffectCallback, dependencies?: React.DependencyList)
{
    return useDeepCompareEffectTMP(callback, dependencies)
}

export function useEventListener(
    eventType: string,
    callback: (a: any) => (void | Promise<void>),
    element: EventTarget = window
)
{
    return useEventListenerTMP(eventType, callback, element)
}
export function useOnScreen(ref: React.MutableRefObject<HTMLElement>, rootMargin = "0px")
{
    return useOnScreenTMP(ref, rootMargin)
}

export function useWindowSize()
{
    return useWindowSizeTMP()
}

export function useLogger(loggerConfig: LoggerConfig)
{
    return useLoggerTMP(loggerConfig)
}

export function useMediaQuery(mediaQuery: string)
{
    return useMediaQueryTMP(mediaQuery)
}

export function useGeolocation(options?: PositionOptions)
{
    return useGeolocationTMP(options)
}

export function useStateWithValidation<T>(validationFunc: (state: T) => boolean, initialValue: T | (() => T))
{
    return useStateWithValidationTMP<T>(validationFunc, initialValue)
}

export function useSize(ref: React.MutableRefObject<HTMLElement>)
{
    return useSizeTMP(ref)
}

export function useEffectOnce(cb: EffectCallback)
{
    useEffectOnceTMP(cb)
}

export function useCanvas({update, draw, fps = 60, loop = true}: useCanvasInput)
{
    return useCanvasTMP({update, draw, fps, loop})
}