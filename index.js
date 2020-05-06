const { mungeLocation } = require('./utils.js');
const locationData = require('./geo.json');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;



dotenv.config();

app.use(cors());

app.get('/location', (req, res) => {
    const mungedData = mungeLocation(locationData);

    res.json({ mungedData });
});

app.get('/weather', (req, res) => {
    res.json([
        {
            'forecast': 'Partly cloudy until afternoon.',
            'time': 'Mon Jan 01 2001'
        },
        {
            'forecast': 'Mostly cloudy in the morning.',
            'time': 'Tue Jan 02 2001'
        },
    ]);
});


app.listen(PORT, () => console.log(`running on port ${PORT}`));

