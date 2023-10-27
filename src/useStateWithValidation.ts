import { useCallback, useState } from "react";

export type Initializer<T> = T extends () => any ? (T | (() => T)) :
    T extends Function ? never : (T | (() => T))
export default function useStateWithValidation<T>(validationFunc: (state: T) => boolean, initialValue: T | (() => T)):[T, (nextState: Initializer<T>) => void, boolean]
{
    const [state, setState] = useState(initialValue)
    const [isValid, setIsValid] = useState(() => validationFunc(state))

    const onChange = useCallback((nextState: Initializer<T>) => {
        var v = typeof( nextState) === "function"? nextState(state): nextState as T
        
        setState(v)
        setIsValid(validationFunc(v))
    }, [validationFunc])

    return [state, onChange, isValid]
}  