import useAsync from "./useAsync"

const DEFAULT_OPTONS: RequestInit  = {
    headers: {"Content-Type": "application/json"},
}

export function useFetch<T>(url: string, options: RequestInit = {}, dependencies: React.DependencyList = []) {
    return useAsync<T>(async () => {
        const res = await fetch(url, { ...DEFAULT_OPTONS, ...options })
        if (res.ok) return res.json()
        const json = await res.json()
        return await Promise.reject(json)
    }, dependencies)
}