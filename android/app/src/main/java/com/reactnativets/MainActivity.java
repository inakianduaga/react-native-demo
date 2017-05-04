package com.reactnativets;

import android.os.Bundle;
import android.support.annotation.Nullable;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

public class MainActivity extends ReactActivity {

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
                Bundle bundle = new Bundle();
                // Start our application on the intro page
                bundle.putString("navigation", "intro");
                return bundle;
            }
        };
    }
}
