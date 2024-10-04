const express = require('express');
const app =express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');


// Load environment variables from the .env file
dotenv.config();

// Create an Express application
const app = express();
app.use(cors());

// Set up middleware to parse JSON requests
app.use(express.json());

// Create the database connection using credentials from .env
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test the database connection
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);

  }
  console.log('Connected to the MySQL database.' db.threadId);
});

// Endpoint placeholders for assignment questions

// Question 1 goes here: Retrieve all patients
// Answer 1: Retrieve all patients
app.get('/patients', (req, res) => {
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  

// Question 2 goes here: Retrieve all providers
// Answer 2: Retrieve all providers
app.get('/providers', (req, res) => {
    const query = 'SELECT first_name, last_name, provider_specialty FROM providers';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  
// Question 3 goes here: Filter patients by first name
// Answer: Filter patients by first name
app.get('/patients/filter', (req, res) => {
    const { first_name } = req.query;
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?';
    db.query(query, [first_name], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  
// Question 4 goes here: Retrieve providers by specialty
// Answer: Retrieve providers by specialty
app.get('/providers/filter', (req, res) => {
    const { specialty } = req.query;
    const query = 'SELECT first_name, last_name, provider_specialty FROM providers WHERE provider_specialty = ?';
    db.query(query, [specialty], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  
// Start the server

app.listen(process.env.PORT,() = {
    console.log(`Server Listening on port ${process.env.PORT}`);
});

