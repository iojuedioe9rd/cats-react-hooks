import { useReducer, useEffect, useDebugValue } from 'react';

type State = {
    data: any;
    loading: boolean;
    error: Error | null;
};

type Action = 
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: any }
  | { type: 'ERROR'; payload: Error };

const dataFetchReducer = (state: State, action: Action) => {
    
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true };
        case 'SUCCESS':
            return { ...state, data: action.payload, loading: false };
        case 'ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            throw new Error();
    }
}

export const useFetch = async<T>(url: string)=> {
    await useDebugValue(`loading... ${url}`)
    const [state, dispatch] = await useReducer(dataFetchReducer, {
        data: null,
        loading: false,
        error: null,
    });

    useEffect( () => {
        let didCancel = false;

        async function fetchData() {
            await dispatch({ type: 'LOADING' });

            try {
                const response = await fetch(url);
                if (!didCancel) {
                    const data = await response.json() as Promise<T>;
                    await dispatch({ type: 'SUCCESS', payload: data });
                }
            } catch (error) {
                if (!didCancel) {
                    await dispatch({ type: 'ERROR', payload: error });
                }
            }
        }

         fetchData();

        return  () => {
            didCancel = true;
        };
    }, [url]);

    if(state.error === null)
    {
        await useDebugValue(state.error)
    }
    else
    {
        await useDebugValue(`SUCCESS ${url}`)
    }
    return await { ...state as {
        data: T,
        loading: boolean,
        error: Error | null,
    } };
}

