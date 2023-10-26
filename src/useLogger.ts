import { useEffect, useState } from "react"

export class Logger
{
    loggerConfig: LoggerConfig
    constructor(loggerConfig: LoggerConfig)
    {
        this.loggerConfig = loggerConfig
    }

    public log(message?: any, ...optionalParams: any[])
    {
        console.log(`%c[${this.loggerConfig.namespace}]: ${message}`,[this.loggerConfig.colors?.log ,optionalParams])
    }
    public error(message?: any, ...optionalParams: any[])
    {
        console.error(`%c[${this.loggerConfig.namespace}]: `,[this.loggerConfig.colors?.error ,optionalParams])
    }
    public warning(message?: any, ...optionalParams: any[])
    {
        console.warn(`%c[${this.loggerConfig.namespace}]: `,[this.loggerConfig.colors?.warning ,optionalParams])
    }
}

export type LoggerConfig = {
    namespace: string
    colors?:{
        log: string,
        error: string,
        warning: string
    }
}

export default function useLogger(loggerConfig: LoggerConfig)
{
    var _LoggerConfig: LoggerConfig = {colors: {
        log: "",
        error: "color: red",
        warning: "color: yellow"
    }, ...loggerConfig}

    const [logger, setLogger] = useState<Logger>()

    useEffect(() => {
        setLogger(new Logger(_LoggerConfig))
    }, [loggerConfig])

    return logger
}