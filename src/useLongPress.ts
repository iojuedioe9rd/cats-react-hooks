import React from "react";
import { useTimeout } from "./useTimeout";
import useEffectOnce from "./useEffectOnce";
import useEventListener from "./useEventListener";

/**
 * Generates a long press event handler hook.
 *
 * @param {React.MutableRefObject<HTMLElement>} ref - The reference to the element.
 * @param {() => (void | Promise<void>)} callback - The callback function to be executed on long press.
 * @param {{delay: number}} options - The optional configuration object.
 * @param {number} options.delay - The delay in milliseconds before the long press is triggered.
 * @return {void} 
 */
export default function useLongPress(
  ref: React.MutableRefObject<HTMLElement>,
  callback: () => (void | Promise<void>),
  { delay = 250 }: { delay?: number } = {}
) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffectOnce(clear);

  useEventListener("mousedown", reset, ref.current);
  useEventListener("touchstart", reset, ref.current);
  useEventListener("mouseup", clear, ref.current);
  useEventListener("mouseleave", clear, ref.current);
  useEventListener("touchend", clear, ref.current);
}
