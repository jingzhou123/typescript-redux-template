import { INCREMENT_COUNTER } from "./actionTypes"

export const increaseCounterAsync = () => {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch({
                type: INCREMENT_COUNTER
            })
        }, 500);
    }
}