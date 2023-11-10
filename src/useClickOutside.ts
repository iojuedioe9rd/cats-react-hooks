import { isNull } from "lodash";
import useEventListener from "./useEventListener";
import React from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @param {(EventTarget | null)} e
 */
export function assertIsNode(e: EventTarget | null) {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @param {React.MutableRefObject<HTMLElement>} ref
 * @param {(event: MouseEvent) => (void | Promise<void>)} cb
 * @returns {any) => void}
 */
export default function useClickOutside(
  ref: React.MutableRefObject<HTMLElement>,
  cb: (event: MouseEvent) => void | Promise<void>,
) {
  useEventListener(
    "click",
    async (e: MouseEvent) => {
      assertIsNode(e.target);
      if (isNull(ref.current) || ref.current.contains(e.target as any)) return;
      await cb(e);
    },
    document,
  );
}
