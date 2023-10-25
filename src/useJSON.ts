import {useState} from "react"

type jsonInfo<T> =
{
    data?: T
    isLoaded?: boolean
    isError?: boolean
}
export function useJSON<T>(url: string | URL)
{
    const [json, setJSON] = useState<jsonInfo<T>>({data: undefined, isLoaded: false, isError: false})
    

    function useLoad(req: XMLHttpRequest)
    {
        if(req.readyState == req.DONE)
        {
            setJSON({data: JSON.parse(req.responseText), isLoaded: true, isError: false})
        }
    }

    let req: XMLHttpRequest = new XMLHttpRequest()
    req.addEventListener("load", useLoad.bind(this, req))
    req.addEventListener("error", () => {
        setJSON({isError: true})
    })
    req.open("GET", url)
    
    req.send()

    return json
}