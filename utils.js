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
                Weather: weather.weather.description,
                Time: weather.valid_date,
                Ozone: weather.ozone
            };

        });
        
        return thing.slice(0, 8);

    } catch (event) {
        return [{}];
    }
}

module.exports = {
    mungeLocation,
    mungeWeather
};