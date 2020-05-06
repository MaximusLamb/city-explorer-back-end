const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/location', (req, res) => {
    res.json({ hello: 'location' });
});

app.get('/weather', (req, res) => {
    console.log(req);
    res.json({ hello: 'weather' });
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));

