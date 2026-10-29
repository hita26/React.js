import { createContext,useContext,useState } from "react";
export function Parent() {
const handleClick = () => {
alert("Event from Parent");
};
return <Child onClick={handleClick} />;
}
function Child({ onClick }) {
return <button onClick={onClick}>Click Me</button>;
}