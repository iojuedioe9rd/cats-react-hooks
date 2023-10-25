import {useFetch} from "./useFetch"

type jsonInfo<T> =
{
    data?: T
    isLoaded?: boolean
    isError?: boolean
}

/**
 * @deprecated Use the Fetch Hook Instead
 */
export function useJSON<T>(url: string | URL)
{
    var {
        error,
        value} = useFetch<T>(url.toString())
    
    var json: jsonInfo<T> = {}
    if(error !== undefined)
    {
        json.isLoaded = false
        json.isError = true
    }
    else
    {
        json.data = value
        json.isLoaded  = false
    }

    return json
}