import isNull from "lodash/isNull";
import React, { useEffect, useState } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:56 PM
 *
 * @export
 * @param {React.MutableRefObject<HTMLElement>} ref
 * @param {string} [rootMargin="0px"]
 * @returns {*}
 */
export default function useOnScreen(
  ref: React.MutableRefObject<HTMLElement>,
  rootMargin = "0px",
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(ref.current);
    if (isNull(ref.current)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin },
    );
    observer.observe(ref.current);

    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);

  return isVisible;
}
