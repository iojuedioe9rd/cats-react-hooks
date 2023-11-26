import { useEffect, useRef } from "react";
import useRenderCount from "./useRenderCount";
import { Logger } from "./useLogger";

export type DebugInformationInfo = {
  count: number;
  changedProps: any;
  timeSinceLastRender: number;
  lastRenderTimestamp: number;
};
/**
 * Generates a debug information object for a component.
 *
 * @param {string} componentName - The name of the component.
 * @param {any} props - The props object for the component.
 * @return {DebugInformationInfo} - The debug information object.
 */
export default function useDebugInformation(
  componentName: string,
  props: any,
): DebugInformationInfo {
  // Get the number of times the component has rendered
  const count = useRenderCount();

  // Keep track of props that have changed
  const changedProps = useRef<any>({});

  // Keep track of the previous props
  const previousProps = useRef(props);

  // Keep track of the timestamp of the last render
  const lastRenderTimestamp = useRef(Date.now());

  // Get all the keys from the current props and the previous props
  const propsKeys = Object.keys({ ...props, ...previousProps });

  // Find the props that have changed
  changedProps.current = propsKeys.reduce((obj, key) => {
    if (props[key] === propsKeys[key]) return obj;
    return {
      ...obj,
      [key]: props[key],
    };
  }, {});

  // Create the debug information object
  const info: DebugInformationInfo = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
    lastRenderTimestamp: lastRenderTimestamp.current,
  };

  // Update the previous props and last render timestamp on each render
  useEffect(() => {
    previousProps.current = props;
    lastRenderTimestamp.current = Date.now();

    // Log the debug information
    console.log("[debug-info]", componentName, info);
  });

  // Return the debug information object
  return info;
}
