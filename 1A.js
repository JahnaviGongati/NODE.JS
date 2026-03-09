const express = require('express');
const app = express();
const path=require('path');
const PORT = 3080;

/* ---------------------------------
   1. BASIC ROUTE HANDLING
--------------------------------- */

// Home route
app.get('/', (req, res) => {
   // res.send('Welcome to the Home Route');
   res.sendFile(path.join("C:\\Users\\lenovo\\OneDrive\\Desktop\\HTML\\ex1.html"));
});

// About route
app.get('/about', (req, res) => {
    
    res.send('This is the About Page');
});

/* ---------------------------------
   2. HANDLING HTTP METHODS
--------------------------------- */

// GET method
app.get('/login', (req, res) => {
    res.send('Login Page (GET request)');
});

// POST method
app.post('/login', (req, res) => {
    res.send('Login Data Submitted (POST request)');
});

/* ---------------------------------
   3. ROUTE PARAMETERS
--------------------------------- */
// Syntax: /route/:parameterName

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID received is: ${userId}`);
});

// Multiple route parameters
app.get('/product/:category/:pid', (req, res) => {
    const { category, pid } = req.params;
    res.send(`Category: ${category}, Product ID: ${pid}`);
});

/* ---------------------------------
   4. QUERY PARAMETERS
--------------------------------- */
// URL Example: /search?keyword=node&page=2

app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    const page = req.query.page;

    res.send(`Search Keyword: ${keyword}, Page Number: ${page}`);
});

/* ---------------------------------
   5. URL BUILDING
--------------------------------- */

app.get('/dashboard', (req, res) => {
    const userId = 101;

    // Building URL dynamically
    const profileURL = `/user/${userId}`;
    const searchURL = `/search?keyword=express&page=1`;

    res.send(`
        Dashboard Page <br>
        Profile URL: ${profileURL} <br>
        Search URL: ${searchURL}
    `);
});

/* ---------------------------------
   SERVER START
--------------------------------- */

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});