import { EffectCallback, useEffect } from "react"

export default function useEffectOnce(cb: EffectCallback)
{
    useEffect(cb, [])
}