import { useEffect, useState } from "react";

export default function useCustomEvent<T>(name: string, data?: CustomEventInit<T>)
{
    const [event, setEvent] = useState<CustomEvent<T>>()

    useEffect(() => {
        setEvent(new CustomEvent<T>(name, data))
        
    }, [data])

    return event

}