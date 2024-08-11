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


// const path = require('path');
// const express = require('express');
// const app = express();
// const Pool = require('pg').Pool;
// const Path = require('path');
// const ejs = require('ejs');
// const PORT = 3010;
// require('dotenv').config();

// const pool = new Pool({
//     user: process.env.USER_NAME,
//     host: process.env.HOST_NAME,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     dialect: process.env.DIALECT,
//     port: process.env.PORT_NUMBER
// })

// pool.connect((err, client, release) => {
//     if (err) {
//         return console.error('Error in connection');
//     }
//     client.query('SELECT NOW()', (err, result) => {
//         release();
//         if (err) {
//             return console.error('Error executing query');
//         }
//         console.log("Connected to database:")
//     });
// });

// app.set('views', path.join(__dirname, 'views')); 
// app.set('view engine', 'ejs')
// app.use('/static', express.static('static'))

// app.use(express.urlencoded({extended: true}))
// app.use(express.json)

// app.get('/', async(req, res) => {
//     res.render('index');
// });

// app.listen(PORT, () => {
//     console.log(`Server started at port ${PORT}`);
// });