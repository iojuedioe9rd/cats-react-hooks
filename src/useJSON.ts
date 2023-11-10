import { useFetch } from "./useFetch";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @typedef {jsonInfo}
 * @template T
 */
type jsonInfo<T> = {
  data?: T;
  isLoaded?: boolean;
  isError?: boolean;
};

/**
 * @deprecated Use the Fetch Hook Instead
 */
export function useJSON<T>(url: string | URL) {
  var { error, value } = useFetch<T>(url.toString());

  var json: jsonInfo<T> = {};
  if (error !== undefined) {
    json.isLoaded = false;
    json.isError = true;
  } else {
    json.data = value;
    json.isLoaded = false;
  }

  return json;
}
