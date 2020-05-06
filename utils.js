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

module.exports = {
    mungeLocation,
};