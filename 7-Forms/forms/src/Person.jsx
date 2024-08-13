import { useState } from "react";

function Person() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [greeting, setGreeting] = useState(""); 

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                setGreeting(`${firstName} ${lastName}`); 
            }} className="form">
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {greeting && <p className="greet">Hello {greeting} !!</p>} 
        </>
    )
}

export default Person;
