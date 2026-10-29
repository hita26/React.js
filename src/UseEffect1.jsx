import { useEffect, useState } from "react";
export function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`count value: ${count}`);
    },[count]);
    return (
        <div>
            <p>your clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>add</button>
        </div>
    )
}