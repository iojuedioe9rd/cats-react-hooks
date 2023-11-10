import isNull from "lodash/isNull";
import React, { useEffect, useState } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:56 PM
 *
 * @export
 * @param {React.MutableRefObject<HTMLElement>} ref
 * @returns {DOMRectReadOnly | undefined}
 */
export default function useSize(
  ref: React.MutableRefObject<HTMLElement>,
): DOMRectReadOnly | undefined {
  const [size, setSize] = useState<DOMRectReadOnly>();

  useEffect(() => {
    if (isNull(ref.current)) return () => {};
    const observer = new ResizeObserver(([entry]) => {
      setSize(entry.contentRect);
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return size;
}
