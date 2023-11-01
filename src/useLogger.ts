import { useEffect, useState } from "react"
import useDeepCompareEffect from "./useDeepCompareEffect"

var colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        gray: "\x1b[90m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        crimson: "\x1b[48m"
    }
};
export class Logger
{
    loggerConfig: LoggerConfig
    constructor(loggerConfig: LoggerConfig)
    {
        this.loggerConfig = loggerConfig
    }

    public log(...message: any)
    {
        console.log(`${colours.fg.gray}[${this.loggerConfig.namespace}]: ${message}`)
    }
    public error(...message: any)
    {
        console.error(`${colours.fg.red}[${this.loggerConfig.namespace}]: ${message}`)
    }
    public warning(...message: any)
    {
        console.warn(`${colours.fg.yellow}[${this.loggerConfig.namespace}]: ${message}`)
    }
}

export type LoggerConfig = {
    namespace: string
    
}

export default function useLogger(loggerConfig: LoggerConfig)
{
    
    

    const [logger, setLogger] = useState<Logger>()

    useDeepCompareEffect(() => {
        setLogger(new Logger(loggerConfig))
    }, [loggerConfig])  
    

    return logger
}