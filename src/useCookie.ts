import Cookies, { type CookieAttributes } from "js-cookie";
import { useCallback, useState } from "react";

export type UseCookieOut<MMMCookie> = [
  MMMCookie | null,
  (newValue: MMMCookie, options?: CookieAttributes | undefined) => void,
  (options?: CookieAttributes | undefined) => void,
];

/**
 * Generates a hook that allows for interacting with a browser cookie.
 *
 * @param {string} name - The name of the cookie.
 * @param {MMMCookie} defaultValue - The default value for the cookie.
 * @return {UseCookieOut<MMMCookie>} - An array containing the current value of the cookie, as well as functions to update and delete the cookie.
 */
export default function useCookie<MMMCookie>(
  name: string,
  defaultValue: MMMCookie,
): UseCookieOut<MMMCookie> {
  const [value, setValue] = useState<MMMCookie | null>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return JSON.parse(cookie);
    Cookies.set(name, JSON.stringify(defaultValue));
    return defaultValue;
  });

  const updateCookie = useCallback(
    (newValue: MMMCookie, options?: CookieAttributes) => {
      Cookies.set(name, JSON.stringify(newValue), options);
      setValue(newValue);
    },
    [name],
  );

  const deleteCookie = useCallback(
    (options?: CookieAttributes) => {
      Cookies.remove(name, options);
      setValue(null);
    },
    [name],
  );

  return [value, updateCookie, deleteCookie];
}
