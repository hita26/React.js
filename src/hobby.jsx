import { useState } from "react";

export function Hobbies() {
    const [hobbies, setHobbies] = useState([]);
    const [color, setColor] = useState("white");

    const handleChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setHobbies([...hobbies, value]);
        } else {
            setHobbies(hobbies.filter((hobby) => hobby !== value));
        }
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Selected hobbies: " + hobbies.join(", "));
    };

    return (
        <div
            style={{
                backgroundColor: color,
                minHeight: "100vh",
                padding: "20px"
            }}
        >
            <h1>Select Your Hobbies</h1>

            <form onSubmit={handleSubmit}>
                <h3>Select Hobbies</h3>

                <label>
                    <input
                        type="checkbox"
                        value="Dance"
                        onChange={handleChange}
                    />
                    Dance
                </label>

                <br />

                <label>
                    <input
                        type="checkbox"
                        value="Music"
                        onChange={handleChange}
                    />
                    Music
                </label>

                <br />

                <label>
                    <input
                        type="checkbox"
                        value="Reading"
                        onChange={handleChange}
                    />
                    Reading
                </label>

                <br />
                <br />

                <h3>Select Background Color</h3>

                <label>
                    <input
                        type="radio"
                        name="color"
                        value="pink"
                        checked={color === "pink"}
                        onChange={handleColorChange}
                    />
                    Pink
                </label>

                <br />

                <label>
                    <input
                        type="radio"
                        name="color"
                        value="lightblue"
                        checked={color === "lightblue"}
                        onChange={handleColorChange}
                    />
                    Blue
                </label>

                <br />

                <label>
                    <input
                        type="radio"
                        name="color"
                        value="lightgreen"
                        checked={color === "lightgreen"}
                        onChange={handleColorChange}
                    />
                    Green
                </label>

                <br />
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
