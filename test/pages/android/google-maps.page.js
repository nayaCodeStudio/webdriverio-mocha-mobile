class GoogleMapsPage {
    getLocatorGoogleMapsSceen() {
        return require('../../screens/android/google-maps.screen');
    }

    async userLaunchApp() {
        await driver.pause(5000);
        if (await this.getLocatorGoogleMapsSceen().textOneGoogleMaps.isDisplayed()) {
            expect(this.getLocatorGoogleMapsSceen().textOneGoogleMaps).toBeDisplayed();
        } else {
            await this.getLocatorGoogleMapsSceen().textTwoGoogleMaps.isDisplayed();
        }
    }

    async displayExplorePage() {
        expect(this.getLocatorGoogleMapsSceen().btnExplore).toBeDisplayed();
    }

    async searchPlaceDestination() {
        if (await this.getLocatorGoogleMapsSceen().textOneGoogleMaps.isDisplayed()) {
            expect(this.getLocatorGoogleMapsSceen().textOneGoogleMaps).toBeDisplayed();
            await this.getLocatorGoogleMapsSceen().textOneGoogleMaps.click();
            await this.getLocatorGoogleMapsSceen().textTwoGoogleMaps.setValue('Jakarta International Expo');
            expect(this.getLocatorGoogleMapsSceen().assertionItemSearch).toBeDisplayed();
        } else {
            await this.getLocatorGoogleMapsSceen().textTwoGoogleMaps.isDisplayed();
            await this.getLocatorGoogleMapsSceen().textTwoGoogleMaps.click();
            await this.getLocatorGoogleMapsSceen().textTwoGoogleMaps.setValue('Jakarta International Expo');
            expect(this.getLocatorGoogleMapsSceen().assertionItemSearch).toBeDisplayed();
        }
    }

    async choosePlaceDestionation() {
        await this.getLocatorGoogleMapsSceen().assertionItemSearch.click();

    }

    async directionPlaceDestination() {
        expect(this.getLocatorGoogleMapsSceen().assertionButtomTextItemSearch).toBeDisplayed();
        await this.getLocatorGoogleMapsSceen().btnDirection.click();
        if (await this.getLocatorGoogleMapsSceen().fieldChooseStartLocation.isDisplayed()) {
            await this.getLocatorGoogleMapsSceen().fieldChooseStartLocation.click();
            await this.getLocatorGoogleMapsSceen().fieldChooseStartLocation.setValue('Jakarta Barat');
            expect(this.getLocatorGoogleMapsSceen().assertionStartLocation).toBeDisplayed();
            await this.getLocatorGoogleMapsSceen().assertionStartLocation.click();
        } else {
            expect(this.getLocatorGoogleMapsSceen().btnStart).toBeDisplayed();
        }
    }

    async displayRutePlaceDestination() {
        expect(this.getLocatorGoogleMapsSceen().assertionItemSearch).toBeDisplayed();
        await driver.pause(5000);
        await driver.closeApp();
    }
}

module.exports = GoogleMapsPage;