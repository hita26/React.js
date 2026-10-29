function Parent() {
const [message, setMessage] = useState("");
return (
<>
<ChildA sendData={setMessage} />
<ChildB message={message} />
</>
);
}
function ChildA({ sendData }) {
return <button onClick={() => sendData("Hello Sibling")}>Send</button>;
}
function ChildB({ message }) {
return <p>{message}</p>;
}