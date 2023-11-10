import { useRef } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:56 PM
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {*}
 */
export function usePrevious<T>(value: T) {
  const currentRef = useRef(value);
  const previousRef = useRef<T>();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
