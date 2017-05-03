package com.reactnativets.navigation;

import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactnativets.MovieDetailsActivity;

import java.util.HashMap;
import java.util.Map;

/**
 * Module for receiving navigation updates
 */
public class NavigationUpdateModule extends ReactContextBaseJavaModule {

    public static final String IMDB_ID = "IMDB_ID";

    public NavigationUpdateModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "NavigationUpdateModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("NAVIGATION_UPDATE_EVENT_NAME", "NAVIGATION_UPDATE");
        return constants;
    }

    @ReactMethod
    public void update(String to) {
        Log.i("NAVIGATION_UPDATE", to);
    }

    @ReactMethod
    public void navigateToMovieDetails(String imdbId) {
        Log.i("NAV_MOVIE_DETAILS", imdbId);

        // Switch to movie details activity and pass id
        Intent intent = new Intent(this.getReactApplicationContext().getApplicationContext(), MovieDetailsActivity.class);
        intent.putExtra(IMDB_ID, imdbId);
        this.getReactApplicationContext().getApplicationContext().startActivity(intent);
        Log.i("SHOULD_START_ACTIVITY", imdbId);
    }

}
