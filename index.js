const express = require('express');
const app = express();
const path = require('path'); 
const PORT = 3010;


// Set up EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve a basic message to check if the server is running
app.get('/', (req, res) => {
    console.log('Received request for /');
    res.render('index'); // Ensure the 'index.ejs' file exists in the 'views' directory
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});