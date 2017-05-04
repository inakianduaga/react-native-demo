package com.reactnativets;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactNativeHost;
import com.reactnativets.navigation.NavigationUpdateModule;

public class MovieDetailsActivity extends ReactActivity {

    /**
     * How to pass initial props to the application
     * http://stackoverflow.com/questions/34048387/react-native-initialproperties-android
     */
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, "ReactNativeTS") {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                String imdbId = getIntent().getStringExtra(NavigationUpdateModule.IMDB_ID);
                Bundle bundle = new Bundle();
                // Start our application on the intro page
                bundle.putString("navigation", "detail");
                bundle.putString("imdbId", imdbId);
                return bundle;
            }
        };
    }

}
