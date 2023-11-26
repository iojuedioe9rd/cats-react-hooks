import { useState } from "react";
import useEventListener from "./useEventListener";

/**
 * Custom hook that detects whether an element is being hovered.
 * @param ref - The mutable reference to the element.
 * @returns Returns a boolean indicating whether the element is being hovered.
 */
export default function useHover(
  ref: React.MutableRefObject<HTMLElement>,
): boolean {
  const [hovered, setHovered] = useState<boolean>(false);

  // Event listener for mouseover event
  useEventListener("mouseover", () => setHovered(true), ref.current);

  // Event listener for mouseout event
  useEventListener("mouseout", () => setHovered(false), ref.current);

  return hovered;
}
