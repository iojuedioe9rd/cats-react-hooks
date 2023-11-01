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
import useCustomEventTMP from "./useCustomEvent"
import useClickOutsideTMP from "./useClickOutside";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {string} key
 * @param {(T | (() => T))} initialValue
 * @returns {T)) => any}
 */
export function useLocalStorage<T>(key: string, initialValue: T | (() => T))
{
    return useLocalStorageTMP(key,initialValue)
}


/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @returns {*}
 */
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

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {?boolean} [defaultValue]
 * @returns {*}
 */
export function useToggle(defaultValue?: boolean)
{
    var v = typeof(defaultValue) === "undefined" ? false : defaultValue
    return useToggleTMP(v)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {() => void |  Promise<void>} callback
 * @param {number} delay
 * @returns {{
 *     reset: () => void;
 *     clear: () => void;
 * }\}
 */
export function useTimeout(callback: () => void |  Promise<void>, delay: number): {
    reset: () => void;
    clear: () => void;
}
{
    return useTimeoutTMP(callback, delay)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {() => void |  Promise<void>} callback
 * @param {number} delay
 * @param {(React.DependencyList | undefined)} dependencies
 * @returns {any, delay: number, dependencies: any) => void}
 */
export function useDebounce(callback: () => void |  Promise<void>, delay: number, dependencies: React.DependencyList | undefined)
{
    var dep = dependencies === undefined ? [] as React.DependencyList: dependencies

    
    useDebounceTMP(callback, delay, dep)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {React.EffectCallback} callback
 * @param {(React.DependencyList | undefined)} dependencies
 * @returns {*}
 */
export function useUpdateEffect(callback: React.EffectCallback, dependencies: React.DependencyList | undefined)
{
    return useUpdateEffectTMP(callback, dependencies)
}

/**
 *
 * @export
 * @template T
 * @param {(T[] | (() => T[]))} defaultValue
 * @returns {{ array: T[]; set: React.Dispatch<React.SetStateAction<T[]>>; push: (element: T) => void; filter: (callback: FilterCallback<T>) => void; update: (index: number, newElement: T) => void; remove: (index: number) => void; clear: () => void; }\}
 */
export function useArray<T>(defaultValue: T[] | (() => T[])): { array: T[]; set: React.Dispatch<React.SetStateAction<T[]>>; push: (element: T) => void; filter: (callback: FilterCallback<T>) => void; update: (index: number, newElement: T) => void; remove: (index: number) => void; clear: () => void; }
{
    return useArrayTMP<T>(defaultValue)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {*}
 */
export function usePrevious<T>(value: T)
{
    return usePreviousTMP(value)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {(T | (() => T))} defaultValue
 * @param {{capacity: number}} param0
 * @param {number} [param0.capacity=10]
 * @returns {T), { capacity \}: { capacity: number; \}) => any\}
 */
export function useStateWithHistory<T>(
    defaultValue: T | (() => T),
    {capacity = 10}: {capacity: number}
) {
    return useStateWithHistoryTMP<T>(defaultValue, {capacity})
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {string} key
 * @param {(T | (() => T))} initialValue
 * @returns {T)) => any}
 */
export function useSessionStorage<T>(key: string, initialValue: T | (() => T))
{
    return useSessionStorageTMP<T>(key, initialValue)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {string} key
 * @param {(T | (() => T))} initialValue
 * @param {Storage} storageObject
 * @returns {T), storageObject: Storage) => any}
 */
export function useStorage<T>(key: string, initialValue: T | (() => T), storageObject: Storage)
{
    return useStorageTMP<T>(key, initialValue, storageObject)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {() => Promise<SetStateAction<T | undefined>>} callback
 * @param {React.DependencyList} [dependencies=[]]
 * @returns {Promise<SetStateAction<T>>, dependencies?: React.DependencyList) => { loading: any; error: any; value: any; }\}
 */
export function useAsync<T>(callback: () => Promise<SetStateAction<T | undefined>>, dependencies: React.DependencyList = [])
{
    return useAsyncTMP<T>(callback, dependencies)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {(string | URL)} url
 * @param {RequestInit} [options={}]
 * @param {React.DependencyList} [dependencies=[]]
 * @returns {{ loading: any; error: any; value: any; \}\}
 */
export function useFetch<T>(url: string | URL, options: RequestInit = {}, dependencies: React.DependencyList = [])
{
    return useFetchTMP<T>(url.toString(), options, dependencies)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {(string | URL)} url
 * @returns {*}
 */
export function useScript(url: string | URL)
{
    return useScriptTMP(url.toString())
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {EffectCallback} callback
 * @param {?React.DependencyList} [dependencies]
 */
export function useDeepCompareEffect(callback: EffectCallback, dependencies?: React.DependencyList)
{
    return useDeepCompareEffectTMP(callback, dependencies)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {string} eventType
 * @param {(a: any) => (void | Promise<void>)} callback
 * @param {EventTarget} [element=window]
 * @returns {any, element?: EventTarget) => void}
 */
export function useEventListener(
    eventType: string,
    callback: (a: any) => (void | Promise<void>),
    element: EventTarget = window
)
{
    return useEventListenerTMP(eventType, callback, element)
}
/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {React.MutableRefObject<HTMLElement>} ref
 * @param {string} [rootMargin="0px"]
 * @returns {*}
 */
export function useOnScreen(ref: React.MutableRefObject<HTMLElement>, rootMargin = "0px")
{
    return useOnScreenTMP(ref, rootMargin)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @returns {*}
 */
export function useWindowSize()
{
    return useWindowSizeTMP()
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {LoggerConfig} loggerConfig
 * @returns {*}
 */
export function useLogger(loggerConfig: LoggerConfig)
{
    return useLoggerTMP(loggerConfig)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {string} mediaQuery
 * @returns {*}
 */
export function useMediaQuery(mediaQuery: string)
{
    return useMediaQueryTMP(mediaQuery)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {?PositionOptions} [options]
 * @returns {{ loading: any; error: any; data: any; }\}
 */
export function useGeolocation(options?: PositionOptions)
{
    return useGeolocationTMP(options)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {(state: T) => boolean} validationFunc
 * @param {(T | (() => T))} initialValue
 * @returns {(boolean, initialValue: T | (() => T)) => any)}
 */
export function useStateWithValidation<T>(validationFunc: (state: T) => boolean, initialValue: T | (() => T))
{
    return useStateWithValidationTMP<T>(validationFunc, initialValue)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {React.MutableRefObject<HTMLElement>} ref
 * @returns {*}
 */
export function useSize(ref: React.MutableRefObject<HTMLElement>)
{
    return useSizeTMP(ref)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {EffectCallback} cb
 */
export function useEffectOnce(cb: EffectCallback)
{
    useEffectOnceTMP(cb)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {useCanvasInput} param0
 * @param {(ctx: any) => void} param0.update
 * @param {(ctx: any) => void} param0.draw
 * @param {number} [param0.fps=60]
 * @param {boolean} [param0.loop=true]
 * @returns {[any, any]}
 */
export function useCanvas({update, draw, fps = 60, loop = true}: useCanvasInput)
{
    return useCanvasTMP({update, draw, fps, loop})
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {string} name
 * @param {?CustomEventInit<T>} [data]
 * @returns {*}
 */
export function useCustomEvent<T>(name: string, data?: CustomEventInit<T>)
{
    return useCustomEventTMP<T>(name, data)
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {React.MutableRefObject<HTMLElement>} ref
 * @param {(event: MouseEvent) => (void | Promise<void>)} cb
 * @returns {any) => void}
 */
export function useClickOutside(ref: React.MutableRefObject<HTMLElement>, cb: (event: MouseEvent) => (void | Promise<void>))
{
    return useClickOutsideTMP(ref, cb)
}