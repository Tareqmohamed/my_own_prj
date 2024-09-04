const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Example route
app.get('/', (req, res) => {
    res.render('index', {
        title: process.env.NAME || "TAREK",
        cv_url: process.env.CV_URL || "https://drive.google.com/file/d/1uPYk4_0FhQoKk-Tpcw6z0jW0sfAgY3Wy/view",
        github_url: process.env.GITHUB_URL || "https://github.com/Tareqmohamed",
        linkedin_url: process.env.LINKEDIN_URL || "https://www.linkedin.com/in/tareqmohamad/",
    });
});

module.exports = app;
