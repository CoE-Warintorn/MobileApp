RNFirebaseAlbumDemo
===================

This application shows the list of album in Firestore database and let users comment on it.

## Build instruction

This is a React Native application. However, it currently works on Android only because I haven't setup React Native Firebase on iOS yet. A PR is welcome.

### Android

1. Register this application to a Firebase project. The application ID is `com.rnfirebasealbumdemo`. Place the `google-sevices.json` into android/app/
2. Connect a device or start an emulator. Then, either:
  - Run `react-native run-android` or
  - Run `adb reverse tcp:8081 tcp:8081` followed by `react-native start`, then run the project from Android Studio.

## Copyright

Copyright (c) 2018 Ratchanan Srirattanamet

This demo code is distributed under MIT license. MIT license require you to include a copy of license in "all
copies or substantial portions" of the code. However, as this is a demo app, I consider "reading and applying the technique" not to violate the license. Just don't copy the code verbatim. (It probably won't help anyway.)

BTW, this code isn't exactly complying with all licenses when built. A PR for that is welcome as well.