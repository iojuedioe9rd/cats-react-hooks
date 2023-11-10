import React, { SetStateAction, useCallback, useEffect, useState } from "react";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @template T
 * @param {() => Promise<SetStateAction<T | undefined>>} callback
 * @param {React.DependencyList} [dependencies=[]]
 * @returns {Promise<SetStateAction<T>>, dependencies?: React.DependencyList) => { loading: any; error: any; value: any; }\}
 */
export default function useAsync<T>(
  callback: () => Promise<SetStateAction<T | undefined>>,
  dependencies: React.DependencyList = [],
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [value, setValue] = useState<T | undefined>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then((v) => {
        setValue(v);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
