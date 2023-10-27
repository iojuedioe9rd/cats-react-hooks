import { useRef } from "react";
import useEffectOnce from "./useEffectOnce";

export type useCanvasInput = {
    draw?: (ctx : CanvasRenderingContext2D | null) => void
    update?: (ctx : CanvasRenderingContext2D | null) => void
    fps: number
    loop: boolean
}
export default function useCanvas({update, draw, fps = 60, loop = true}: useCanvasInput): [HTMLCanvasElement | undefined, CanvasRenderingContext2D | null]
{
    const canvas = useRef<HTMLCanvasElement>()
    const ctx = useRef<CanvasRenderingContext2D | null>(null)

    useEffectOnce(() => {
        canvas.current = document.createElement("canvas")
        ctx.current = canvas.current.getContext('2d');

        if(loop)
        {
            window.setInterval(() => {
                if (update !== undefined) update(ctx.current)
                
                if(draw !== undefined) draw(ctx.current)
            }, 1000 / fps);
        }
        
    })

    return [canvas.current, ctx.current]
}