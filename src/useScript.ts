import useAsync from "./useAsync";

export default function useScript(url: string): { loading: boolean; error: Error | undefined; }
{
    return useAsync<undefined>(() => {
        const script = document.createElement("script")
        script.src = url
        script.async = true

        return new Promise<any>((resolve, reject) => {
            script.addEventListener("load", resolve)
            script.addEventListener("error", reject)
            document.body.appendChild(script)
        })
    }, [url])
}