import useAsync from "./useAsync"

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @type {RequestInit}
 */
const DEFAULT_OPTONS: RequestInit  = {
    headers: {"Content-Type": "application/json"},
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @template T
 * @param {string} url
 * @param {RequestInit} [options={}]
 * @param {React.DependencyList} [dependencies=[]]
 * @returns {T | undefined}
 */
export function useFetch<T>(url: string, options: RequestInit = {}, dependencies: React.DependencyList = []) {
    return useAsync<T>(async () => {
        const res = await fetch(url, { ...DEFAULT_OPTONS, ...options })
        if (res.ok) return res.json()
        const json = await res.json()
        return await Promise.reject(json)
    }, dependencies)
}