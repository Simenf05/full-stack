const express = require('express');

const app = express()
const port = 3001

app.get("/api", (req, res) => {
    res.send("hei")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})