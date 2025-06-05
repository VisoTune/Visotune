import 'dotenv/config';

export default {
  expo: {
    name: "Visotune",
    slug: "visotune",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.daltonmerrill.visotune",
      buildNumber: "1.0.0",
      supportsTablet: true
    },
    android: {
      package: "com.daltonmerrill.visotune",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    extra: {
      auddApiKey: process.env.AUDD_API_KEY,
      googleVisionKey: process.env.GOOGLE_VISION_KEY,
      spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
      spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      eas: {
        projectId: "YOUR_EAS_PROJECT_ID" // Optional, if using EAS Update
      }
    },
    runtimeVersion: {
      policy: "appVersion"
    },
    plugins: []
  }
};
