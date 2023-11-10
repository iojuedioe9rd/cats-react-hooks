import { useState } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @typedef {FilterCallback}
 * @template T
 */
export type FilterCallback<T> = (
  value: T,
  index: number,
  array: T[],
) => value is T;

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {(T[] | (() => T[]))} defaultValue
 * @returns {{})) => { array: any; set: any; push: (element: T) => void; filter: (callback: FilterCallback<T>) => void; update: (index: number, newElement: T) => void; remove: (index: number) => void; clear: () => void; \}\}
 */
export function useArray<T>(defaultValue: T[] | (() => T[])) {
  const [array, setArray] = useState(defaultValue);

  function push(element: T) {
    setArray((a) => [...a, element]);
  }

  function filter(callback: FilterCallback<T>) {
    setArray((a) => a.filter(callback));
  }

  function update(index: number, newElement: T) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  function remove(index: number) {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length + 1),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}
