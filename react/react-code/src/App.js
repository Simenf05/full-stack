import { useState, useEffect } from "react";

function App() {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/api")
        .then((res) => res.ok ? res.text() : "Failed to load...")
        .then((data) => setData(data))
    }, []);

    return (
        <>
            <p>{data}</p>
        </>
    );
}

export default App;