const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testeexibicao'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// READ
app.get('/', (req, res) => {
  db.query('SELECT * FROM testeexibicao', (err, result) => {
    if (err) throw err;
    res.render('index', { testeexibicao: result });
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
