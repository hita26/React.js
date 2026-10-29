import { useState } from "react";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "abcd" && password === "123") {
            setMessage("Login Successful");
        } else {
            setMessage("Wrong username and password");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <table>
                    <tbody>
                        <tr>
                            <th>Username:</th>
                            <td>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <th>Password:</th>
                            <td>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2">
                                <button type="submit">Login</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>{message}</p>
            </form>
        </div>
    );
}


// import { useState } from "react";

// export function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (username === "abcd" && password === "1q2w3e") {
//             setMessage("Login Successful");
//         } else {
//             setMessage("Wrong username and password");
//         }
//     };

//     return (
//         <div
//             style={{
//                 minHeight: "100vh",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "#f0f4f8",
//             }}
//         >
//             <form
//                 onSubmit={handleSubmit}
//                 style={{
//                     width: "400px",
//                     padding: "35px",
//                     border: "2px solid #3498db",
//                     borderRadius: "15px",
//                     backgroundColor: "white",
//                     boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
//                     textAlign: "center",
//                 }}
//             >
//                 <h2
//                     style={{
//                         color: "#2c3e50",
//                         marginBottom: "30px",
//                         fontSize: "28px",
//                     }}
//                 >
//                     Login
//                 </h2>

//                 <table
//                     style={{
//                         margin: "auto",
//                         borderSpacing: "0 15px",
//                     }}
//                 >
//                     <tbody>
//                         <tr>
//                             <th
//                                 style={{
//                                     textAlign: "left",
//                                     paddingRight: "15px",
//                                     color: "#34495e",
//                                     fontSize: "17px",
//                                 }}
//                             >
//                                 Username :
//                             </th>

//                             <td>
//                                 <input
//                                     type="text"
//                                     value={username}
//                                     onChange={(e) =>
//                                         setUsername(e.target.value)
//                                     }
//                                     placeholder="Enter username"
//                                     style={{
//                                         width: "200px",
//                                         padding: "12px",
//                                         fontSize: "16px",
//                                         border: "1px solid #bbb",
//                                         borderRadius: "8px",
//                                         outline: "none",
//                                     }}
//                                 />
//                             </td>
//                         </tr>

//                         <tr>
//                             <th
//                                 style={{
//                                     textAlign: "left",
//                                     paddingRight: "15px",
//                                     color: "#34495e",
//                                     fontSize: "17px",
//                                 }}
//                             >
//                                 Password :
//                             </th>

//                             <td>
//                                 <input
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) =>
//                                         setPassword(e.target.value)
//                                     }
//                                     placeholder="Enter password"
//                                     style={{
//                                         width: "200px",
//                                         padding: "12px",
//                                         fontSize: "16px",
//                                         border: "1px solid #bbb",
//                                         borderRadius: "8px",
//                                         outline: "none",
//                                     }}
//                                 />
//                             </td>
//                         </tr>

//                         <tr>
//                             <td colSpan="2" style={{ paddingTop: "15px" }}>
//                                 <button
//                                     type="submit"
//                                     style={{
//                                         width: "230px",
//                                         padding: "13px",
//                                         fontSize: "17px",
//                                         fontWeight: "bold",
//                                         color: "white",
//                                         backgroundColor: "#3498db",
//                                         border: "none",
//                                         borderRadius: "8px",
//                                         cursor: "pointer",
//                                     }}
//                                 >
//                                     Login
//                                 </button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <p
//                     style={{
//                         marginTop: "25px",
//                         fontSize: "16px",
//                         fontWeight: "bold",
//                         color: message === "Login Successful"
//                             ? "green"
//                             : "red",
//                     }}
//                 >
//                     {message}
//                 </p>
//             </form>
//         </div>
//     );
// }
