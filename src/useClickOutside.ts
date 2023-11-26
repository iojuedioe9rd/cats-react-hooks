import { isNull } from "lodash";
import useEventListener from "./useEventListener";
import React from "react";

/**
 * This function checks if the given value is a valid DOM node.
 * If the value is null or does not have the "nodeType" property, an error is thrown.
 *
 * @param {EventTarget | null} e - The value to be checked.
 * @throws {Error} - If the value is not a valid DOM node.
 */
export function assertIsNode(e: EventTarget | null) {
  // Check if the value is null or does not have the "nodeType" property
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

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
