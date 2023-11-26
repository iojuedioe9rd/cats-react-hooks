import { useCallback, useState } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @typedef {Initializer}
 * @template T
 */
export type Initializer<T> = T extends () => any
  ? T | (() => T)
  : T extends Function
    ? never
    : T | (() => T);
/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {(state: T) => boolean} validationFunc
 * @param {(T | (() => T))} initialValue
 * @returns {[T, (nextState: Initializer<T>) => void, boolean]}
 */
export default function useStateWithValidation<T>(
  validationFunc: (state: T) => boolean,
  initialValue: T | (() => T),
): [T, (nextState: Initializer<T>) => void, boolean] {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  const onChange = useCallback(
    (nextState: Initializer<T>) => {
      var v =
        typeof nextState === "function" ? nextState(state) : (nextState as T);

      setState(v);
      setIsValid(validationFunc(v));
    },
    [validationFunc],
  );

  return [state, onChange, isValid];
}
