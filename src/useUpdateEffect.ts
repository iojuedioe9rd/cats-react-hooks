import React, { useEffect, useRef } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {React.EffectCallback} callback
 * @param {(React.DependencyList | undefined)} dependencies
 */
export function useUpdateEffect(
  callback: React.EffectCallback,
  dependencies: React.DependencyList | undefined,
) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return () => {};
    }

    return callback();
  }, dependencies);
}
