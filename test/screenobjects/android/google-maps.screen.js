class GoogleMapsScreen {

    /**
     * Get locator of elements by text
     */

    get btnSkip() {
        return $('//*[@text="SKIP"]');
    }

    get titleTextOnboardingPage() {
        return $('//*[@text="Make it your map"]');
    }

    get btnSignIn() {
        return $('//*[@text="Sign in"]');
    }

    get assertionItemSearch() {
        return $('//*[@text="Jakarta International Expo"]');
    }

    get assertionButtomTextItemSearch() {
        return $('//*[@text="Jakarta International Expo"]');
    }

    get btnStart() {
        return $('//*[@text="Start"]');
    }

    get btnDirection() {
        return $('//*[@text="Directions"]');
    }

    get bottomSheetExploreNearby() {
        return $('//*[@text="Explore nearby"]');
    }

    get assertionFieldSearch() {
        return $('//*[@text="Search here"]');    
    }

    get fieldChooseStartLocation() {
        return $('//*[@text="Choose start location"]');
    }

    get assertionStartLocation() {
        return $('//*[@text="West Jakarta"]');
    }

    get textTwoGoogleMaps() {
        return $('//*[@text="Search here"]');
    }

    /**
     * Get locator of elements by xpath
     */

    get iconGoogleMaps() {
        return $('//android.widget.EditText[@content-desc="Search here"]/android.widget.ImageView');
    }

    get searchTextLocationField() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.EditText/android.widget.EditText');
    }

    get itemBasedOnSearch() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.LinearLayout[1]');
    }

    get btnSelectMapType() {
        return $('//android.widget.FrameLayout[@content-desc="Layers"]/android.widget.FrameLayout');
    }

    get btnFindMyLocation() {
        return $('//android.widget.FrameLayout[@content-desc="Re-center map to your location"]/android.widget.FrameLayout');
    }

    get btnChooseMap() {
        return $('//android.view.View[@content-desc="Map"]');
    }

    /**
     * Get locator of elements by id
     */

    get textOneGoogleMaps() {
        return $('~Try gas stations, ATMs');
    }

    get btnSearchVoiceLocation() {
        return $('~Voice search');
    }

    get btnClearSearch() {
        return $('~Clear');
    }

    get btnIgnoreUpdate() {
        return $('~Ignore');
    }

    get iconBadgeUser() {
        return $('~Sign in');
    }

    get btnExplore() {
        return $('~Explore');
    }

    get btnGo() {
        return $('~Go');
    }

    get btnSaved() {
        return $('~Saved');
    }
}

export default new GoogleMapsScreen();
