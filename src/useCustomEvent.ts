import { useEffect, useState } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @template T
 * @param {string} name
 * @param {?CustomEventInit<T>} [data]
 * @returns {*}
 */
export default function useCustomEvent<T>(name: string, data?: CustomEventInit<T>)
{
    const [event, setEvent] = useState<CustomEvent<T>>()

    useEffect(() => {
        setEvent(new CustomEvent<T>(name, data))
        
    }, [data])

    return event

}