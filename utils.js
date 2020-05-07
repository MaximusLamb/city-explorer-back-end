function mungeLocation(locationData) {
    try {
        const firstItem = locationData[0];
    
    
        return {
            formatted_query: firstItem.display_name,
            latitude: firstItem.lat,
            longitude: firstItem.lon
        };
    } catch (e) {
        return {};
    }
}

function mungeWeather(weatherData) {
    try {
        const thing = weatherData.data.map((weather) => {

            return {
                forecast: weather.weather.description,
                time: weather.valid_date
            };

        });
        
        return thing.slice(0, 8);

    } catch (e) {
        return {};
    }
}

function mungedTrails(trails) {
    try {
        const thing = trails[0];

        return {
            longitude: thing.long,
            latitude: thing.lat,
            maxDistance: thing.maxDistance
        };
        

    } catch (e) {
        return [{}];
    }
}
module.exports = {
    mungeLocation,
    mungeWeather,
    mungedTrails
};