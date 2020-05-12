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
       
        const trailData = trails.trails.map(hike => {
            return { 
                name: hike.name,
                location: hike.location,
                length: hike.length,
                stars: hike.stars,
                star_votes: hike.starVotes,
                summary: hike.summary,
                trail_url: hike.url,
                conditions: hike.conditionStatus,
                condition_date: hike.conditionDate.split(' ')[0],
                condition_time: hike.conditionDate.split(' ')[1]
            };
        });
        return trailData.slice(0, 10);
    } catch (e) {
        return [{}];
    }
} 
module.exports = {
    mungeLocation,
    mungeWeather,
    mungedTrails
};