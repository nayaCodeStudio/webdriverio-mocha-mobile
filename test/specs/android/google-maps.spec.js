const GoogleMapsPage = require('../../pages/android/google-maps.page');
const googleMapsPage = new GoogleMapsPage();

describe ('User want to go to some place and see the map on Google Maps :', () => {
    it ('I am launch the app and already logged in on the app.', async() => {
        await googleMapsPage.userLaunchApp();
    });

    it ('I will be redirected to Explore page.', async() => {
        await googleMapsPage.displayExplorePage();
    });

    it ('Search place.', async() => {
        await googleMapsPage.searchPlaceDestination();
    });

    it ('Click on item place destination.', async () => {
        await googleMapsPage.choosePlaceDestionation();
    });

    it ('Click on button direction to show the rute.', async() => {
        await googleMapsPage.directionPlaceDestination();
    });

    it ('Rute will be display on the app.', async() => {
        await googleMapsPage.displayRutePlaceDestination();
    });
});