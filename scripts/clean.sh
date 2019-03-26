#!/bin/bash

rm -rf node_modules/
watchman watch-del-all
yarn cache clean
cd ios/ && xcodebuild clean -project ReactNativeRedditReader.xcodeproj && rm -rf build/ && cd ..
rm -fr $TMPDIR/ react-*
rm -rf /ios/build
yarn
