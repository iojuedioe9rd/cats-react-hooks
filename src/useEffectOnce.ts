import { EffectCallback, useEffect } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @param {EffectCallback} cb
 */
export default function useEffectOnce(cb: EffectCallback) {
  useEffect(cb, []);
}
