const express = require('express');
const app = express();
const path = require('path'); 
const { Pool } = require('pg');
const PORT = 3012;

// Database pool setup
const pool = new Pool({
    user: 'apple',
    host: 'localhost',
    database: 'citizen_db',
    password: 'postgres',
    port: 5432, // port should be a number, not a string
});

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));


// Set up EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve a basic message to check if the server is running
app.get('/', (req, res) => {
    console.log('Received request for /');
    res.render('index'); // Ensure the 'index.ejs' file exists in the 'views' directory
});

// ADD TODO ENDPOINT
app.post('/addTodo', async (req, res) => {
    const { pro_name, pro_type } = req.body; // Correctly extract these values

    // Ensure that pro_name and pro_type are not null or empty
    if (!pro_name || !pro_type) {
        return res.status(400).json({ error: 'Product name and type are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO product (pro_name, pro_type) VALUES ($1, $2) RETURNING *',
            [pro_name, pro_type]
        );
        console.log(result);
        res.redirect('/'); // Redirect to the home page after successful insertion
    } catch (err) {
        console.error('Error in adding todo:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});