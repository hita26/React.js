import { createContext,useContext,useState } from "react";
export function Parent() {
const handleMessage = (msg) => {
alert(msg);
};
return <Child sendData={handleMessage} />;
}
function Child({ sendData }) {
return (
<button onClick={() => sendData("Hello from Child")}>
Send Event
</button>

);
}