import { useCallback, useEffect, useState } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {string} key
 * @param {(T | (() => T))} initialValue
 * @returns {T)) => [T, React.Dispatch<React.SetStateAction<T>>, () => void]}
 */
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, window.localStorage);
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {string} key
 * @param {(T | (() => T))} initialValue
 * @returns {T)) => [T, React.Dispatch<React.SetStateAction<T>>, () => void]}
 */
export function useSessionStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, window.sessionStorage);
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {string} key
 * @param {(T | (() => T))} initialValue
 * @param {Storage} storageObject
 * @returns {([T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>, () => void])}
 */
export function useStorage<T>(
  key: string,
  initialValue: T | (() => T),
  storageObject: Storage,
): [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>,
  () => void,
] {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") return (initialValue as () => T)();
    else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
