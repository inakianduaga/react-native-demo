package com.reactnativets;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.reactnativets.navigation.NavigationUpdateModule;

public class MovieDetailsActivity extends ReactActivity {

    private String imdbId;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Get the Intent that started this activity and extract the string
        Intent intent = getIntent();
        imdbId = intent.getStringExtra(NavigationUpdateModule.IMDB_ID);
        Log.d("MOVIE_IMDB_ID", imdbId);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeTS";
    }
}
