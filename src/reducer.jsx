import { useReducer } from "react";
function Redfun(state, action)
{
    switch (action.type)
    {
        case 'inc':
            return{
                count: state.count + 1
            }
        case 'dec':
            return {
                count: state.count -1
            }
        default:
            return state;
        
    }
}
function CouterRedu() {
    const [state, dispatch] = useReducer(Redfun, { count: 0 });
    return (
        <div>
            <p>value of counter is {state.count}</p>
        
            <button onClick={()=>{dispatch({type : 'inc'})}}>INCREMENT</button>
            <button onClick={()=>{dispatch({type : 'dec'})}}>DECREMENT</button>
        </div>
    );
}
export default CouterRedu
