import { useState } from "react";
import useEventListener from "./useEventListener";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @typedef {Size}
 */
export type Size = {
  width: number;
  height: number;
};

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @returns {*}
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", async (e: Event) => {
    await setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return windowSize;
}
