const express = require('express');
const manifest = require('./build/asset-manifest.json');
const path = require('path');

const app = express()

const port = 3000

app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.js'));
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
