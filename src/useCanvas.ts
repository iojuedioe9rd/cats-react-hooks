import { useRef } from "react";
import useEffectOnce from "./useEffectOnce";

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @typedef {useCanvasInput}
 */
export type useCanvasInput = {
  draw?: (ctx: CanvasRenderingContext2D | null) => void;
  update?: (ctx: CanvasRenderingContext2D | null) => void;
  fps: number;
  loop: boolean;
};
/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:55 PM
 *
 * @export
 * @param {useCanvasInput} param0
 * @param {(ctx: any) => void} param0.update
 * @param {(ctx: any) => void} param0.draw
 * @param {number} [param0.fps=60]
 * @param {boolean} [param0.loop=true]
 * @returns {([HTMLCanvasElement | undefined, CanvasRenderingContext2D | null])}
 */
export default function useCanvas({
  update,
  draw,
  fps = 60,
  loop = true,
}: useCanvasInput): [
  HTMLCanvasElement | undefined,
  CanvasRenderingContext2D | null,
] {
  const canvas = useRef<HTMLCanvasElement>();
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  useEffectOnce(() => {
    canvas.current = document.createElement("canvas");
    ctx.current = canvas.current.getContext("2d");

    if (loop) {
      var ID = window.setInterval(() => {
        if (update !== undefined) update(ctx.current);

        if (draw !== undefined) draw(ctx.current);
      }, 1000 / fps);
      return () => {
        clearTimeout(ID);
      };
    }
  });

  return [canvas.current, ctx.current];
}
