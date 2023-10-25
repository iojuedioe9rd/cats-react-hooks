import React, { SetStateAction, useCallback, useEffect, useState } from "react"

export default function useAsync<T>(callback: () => Promise<SetStateAction<T | undefined>>, dependencies: React.DependencyList = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | undefined>()
  const [value, setValue] = useState<T | undefined>()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      .then((v) => {
        setValue(v)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return {loading, error, value }
}