import googleMapsScreen from "../../screenobjects/android/google-maps.screen";

describe ('User want to go to some place and see the map on Google Maps :', () => {
    it ('I am launch the app and already logged in on the app.', async() => {
        expect(googleMapsScreen.assertionFieldSearch).toBeDisplayed();
    });

    it ('I will be redirected to Explore page.', async() => {
        expect(googleMapsScreen.btnExplore).toBeDisplayed();
    });

    it ('Search place.', async() => {
        await googleMapsScreen.assertionFieldSearch.click();
        await googleMapsScreen.assertionFieldSearch.setValue('Jakarta International Expo');
        expect(googleMapsScreen.assertionItemSearch).toBeDisplayed();
    });

    it ('Click on item place destination.', async () => {
        await googleMapsScreen.assertionItemSearch.click();
    });

    it ('Click on button direction to show the rute.', async() => {
        expect(googleMapsScreen.assertionButtomTextItemSearch).toBeDisplayed();
        await googleMapsScreen.btnDirection.click();
        if (await googleMapsScreen.fieldChooseStartLocation.isDisplayed()) {
            await googleMapsScreen.fieldChooseStartLocation.click();
            await googleMapsScreen.fieldChooseStartLocation.setValue('Jakarta Barat');
            expect(googleMapsScreen.assertionStartLocation).toBeDisplayed();
            await googleMapsScreen.assertionStartLocation.click();
        } else {
            expect(googleMapsScreen.btnStart).toBeDisplayed();
        }
    });

    it ('Rute will be display on the app.', async() => {
        expect(googleMapsScreen.assertionItemSearch).toBeDisplayed();
    });
});