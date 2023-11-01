import { useEffect, useState } from "react"
import useDeepCompareEffect from "./useDeepCompareEffect"

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @type {{ reset: string; bright: string; dim: string; underscore: string; blink: string; reverse: string; hidden: string; fg: { black: string; red: string; green: string; yellow: string; blue: string; magenta: string; cyan: string; white: string; gray: string; crimson: string; }; bg: { ...; \}; \}\}
 */
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
/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @class Logger
 * @typedef {Logger}
 */
export class Logger
{
    /**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @type {LoggerConfig}
 */
loggerConfig: LoggerConfig
    /**
 * Creates an instance of Logger.
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @constructor
 * @param {LoggerConfig} loggerConfig
 */
constructor(loggerConfig: LoggerConfig)
    {
        this.loggerConfig = loggerConfig
    }

    /**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @public
 * @param {...*} message
 */
public log(...message: any)
    {
        console.log(`${colours.fg.gray}[${this.loggerConfig.namespace}]: ${message}`)
    }
    /**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @public
 * @param {...*} message
 */
public error(...message: any)
    {
        console.error(`${colours.fg.red}[${this.loggerConfig.namespace}]: ${message}`)
    }
    /**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @public
 * @param {...*} message
 */
public warning(...message: any)
    {
        console.warn(`${colours.fg.yellow}[${this.loggerConfig.namespace}]: ${message}`)
    }
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @typedef {LoggerConfig}
 */
export type LoggerConfig = {
    namespace: string
    
}

/**
 * ${1:Description placeholder}
 * @date 11/1/2023 - 4:18:54 PM
 *
 * @export
 * @param {LoggerConfig} loggerConfig
 * @returns {*}
 */
export default function useLogger(loggerConfig: LoggerConfig)
{
    
    

    const [logger, setLogger] = useState<Logger>()

    useDeepCompareEffect(() => {
        setLogger(new Logger(loggerConfig))
    }, [loggerConfig])  
    

    return logger
}