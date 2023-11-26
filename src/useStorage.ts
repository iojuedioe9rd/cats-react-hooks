"use client";
import { useCallback, useState } from "react";
import useDeepCompareEffect from "./useDeepCompareEffect";

/**
 * Custom hook that provides a way to store and retrieve data from localStorage.
 * @param key - The key to use for storing the data in localStorage.
 * @param initialValue - The initial value to use if no value is found in localStorage.
 * @returns An array containing the stored value, a function to update the value, and a function to remove the value from localStorage.
 */
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, localStorage);
}

/**
 * Custom hook that provides a way to store and retrieve data from sessionStorage.
 * @param key - The key to use for storing the data in sessionStorage.
 * @param initialValue - The initial value to use if no value is found in sessionStorage.
 * @returns An array containing the stored value, a function to update the value, and a function to remove the value from sessionStorage.
 */
export function useSessionStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, sessionStorage);
}

/**
 * Custom hook that provides a way to store and retrieve data from a storage object.
 * @param key - The key to use for storing the data in the storage object.
 * @param initialValue - The initial value to use if no value is found in the storage object.
 * @param storageObject - The storage object to use (e.g. localStorage or sessionStorage).
 * @returns An array containing the stored value, a function to update the value, and a function to remove the value from the storage object.
 */
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
      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    }
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useDeepCompareEffect(() => {
    if (!storageObject) {
      return () => {};
    }
    if (value === undefined) {
      return storageObject.removeItem(key);
    }
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}