"use client";
import { useCallback, useState } from "react";
import useDeepCompareEffect from "./useDeepCompareEffect";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, localStorage);
}

export function useSessionStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, sessionStorage);
}

export function useStorage<T>(
  key: string,
  initialValue: T | (() => T),
  storageObject: Storage | undefined,
): [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>,
  () => void,
] {
  const [value, setValue] = useState<T | undefined>(() => {
    if (!storageObject) {
      if (typeof initialValue === "function")
        return (initialValue as () => T)();
      else {
        return initialValue;
      }
    }
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") return (initialValue as () => T)();
    else {
      return initialValue;
    }
  });

  useDeepCompareEffect(() => {
    if (!storageObject) return () => {};
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
