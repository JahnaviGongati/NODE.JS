const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join("C:\\Users\\lenovo\\OneDrive\\Desktop\\Node.js\\home.js", "index.html"));
});

app.listen(8080);
