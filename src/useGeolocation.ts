import { SetStateAction, useEffect, useState } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @param {?PositionOptions} [options]
 * @returns {{ loading: any; error: any; data: any; }\}
 */
export default function useGeolocation(options?: PositionOptions)
{
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<GeolocationPositionError | null>(null)
    const [data, setData] = useState<GeolocationCoordinates>()

    useEffect(() => {
        const successHandler = (e: GeolocationPosition) => {
            setLoading(false)
            setError(null)
            setData(e.coords)
        }

        const errorHandler = (e: GeolocationPositionError) => {
            setError(e)
            setLoading(false)
        }

        navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options)


        const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options)
        return () => navigator.geolocation.clearWatch(id)
    }, [options])

    return {loading, error, data}
}