import { useEffect, useRef } from "react";

/** Custom hook to track the number of times a component renders */
export default function useRenderCount() {
  // Initialize a ref to store the render count
  const count = useRef(1);

  // Increment the render count on each render
  useEffect(() => {
    count.current++;
  });

  // Return the current render count
  return count.current;
}
