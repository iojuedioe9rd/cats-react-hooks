import { EffectCallback, useEffect, useRef } from "react";
import { isEqual } from "lodash";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @param {EffectCallback} callback
 * @param {?React.DependencyList} [dependencies]
 */
export default function useDeepCompareEffect(
  callback: EffectCallback,
  dependencies?: React.DependencyList,
) {
  const currentDependenciesRef = useRef<React.DependencyList | undefined>();

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
}
