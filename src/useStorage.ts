import { useCallback, useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, window.localStorage)
}

export function useSessionStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, window.sessionStorage)
}


export function useStorage<T>(key: string, initialValue: T | (() => T), storageObject: Storage)
{
  const [value, setValue] = useState<T| undefined>(() => {
    const jsonValue = storageObject.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof(initialValue) === "function") return (initialValue as () => T)()
    else {
      return initialValue
    }
  })

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key)
    storageObject.setItem(key, JSON.stringify(value))

  }, [key, value, storageObject])

  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return [value, setValue, remove]
}