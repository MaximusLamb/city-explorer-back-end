const { mungeLocation, mungeWeather, mungedTrails } = require('./utils.js');
dotenv.config();
const dotenv = require('dotenv');
const express = require('express');
const request = require('superagent');

const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');




app.use(cors());

app.get('/location', async(req, res) => {
    try {
        const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${req.query.search}&format=json`);
        const mungedData = mungeLocation(data.body);
    
        res.json(mungedData);

    } catch (e) {
        res.json({
            status: 500,
            responseText: 'Everything is broken and stupid',
            e
        });

    }
});




app.get('/weather', async(req, res) => {
    try {
        const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`);
        const mungedData = mungeWeather(data.body);
        
        res.json(mungedData);
        
    } catch (e) {
        res.json({
            status: 500,
            responseText: 'Everything is broken and stupid',
            e
        });

    }
});

app.get('/trails', async(req, res) => {
    try {
        const data = await request.get(`https://www.hikingproject.com/data/get-trails?lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.TRAILS_KEY}`);
        const mungedData = mungedTrails(data.body);
        
        res.json(mungedData);
        
    } catch (e) {
        res.json({
            status: 500,
            responseText: 'Everything is broken and stupid',
            e
        });

    }
});


app.listen(PORT, () => console.log(`running on port ${PORT}`));

