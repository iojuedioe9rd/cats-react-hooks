import { useState } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {boolean} defaultValue
 * @returns {{}\}
 */
export function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value?: boolean) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue,
    );
  }

  return [value, toggleValue];
}
