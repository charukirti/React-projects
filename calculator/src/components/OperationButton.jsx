import { ACTION } from "./Calculator";

export default function OperationButton({ operation, dispatch }) {
    return (
        <button onClick={() => dispatch({type: ACTION.CHOOSE_OPERATION, payload: {operation}})}>
            {operation}
        </button>
    )
}

