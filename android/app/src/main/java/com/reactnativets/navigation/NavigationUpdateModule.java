package com.reactnativets.navigation;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

/**
 * Module for receiving navigation updates
 */
public class NavigationUpdateModule extends ReactContextBaseJavaModule {

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
        Log.i("NAV_EVENT_RECEIVED", to);
    }
}
