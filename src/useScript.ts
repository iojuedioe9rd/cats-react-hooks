import useAsync from "./useAsync";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:56 PM
 *
 * @export
 * @param {string} url
 * @returns {({ loading: boolean; error: Error | undefined; })\}
 */
export default function useScript(url: string): {
  loading: boolean;
  error: Error | undefined;
} {
  return useAsync<undefined>(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    return new Promise<any>((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url]);
}
