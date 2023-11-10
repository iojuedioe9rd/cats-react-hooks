import { useEffect } from "react";
import { useTimeout } from "./useTimeout";
import React from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @param {() => void |  Promise<void>} callback
 * @param {number} delay
 * @param {React.DependencyList} dependencies
 * @returns {any, delay: number, dependencies: React.DependencyList) => void}
 */
export function useDebounce(
  callback: () => void | Promise<void>,
  delay: number,
  dependencies: React.DependencyList,
) {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
