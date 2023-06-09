# Delivero Clone

- ` npx create-expo-app ./`
- Install tailwind for react-native [nativewind](https://www.nativewind.dev/quick-starts/expo)
- React Navigation
  `npm install @react-navigation/native-stack`
- [React Native Heroicons
  ](https://www.npmjs.com/package/react-native-heroicons) [web](https://heroicons.com/)

  ```
  npm i react-native-heroicons react-native-svg
  ```

- [Sanity](https://www.sanity.io/sonny)

  ```
    npm install -g @sanity/cli
    cd indigo-clam
    sanity start
  ```

  image url

  ```
    npm i @sanity/client @sanity/image-url
  ```

  To add cors domain

  ```
    sanity cors add http://localhost:3000/
    sanity cors add http://localhost:19006/
  ```

  Deploy

  ```
    sanity deploy
  ```

  Backend [URL](https://deliverooclonecorozb.sanity.studio/desk)

  Santiy Query in Vision

  ```
        *[_type == "featured"] {
              ...,
              restaurants[] -> {
                ...,
                dishes[] ->,
                  type -> {
                    name
                  }
              }
            }
  ```

  - [Redux](https://redux-toolkit.js.org/introduction/getting-started)

  ```
    npm install @reduxjs/toolkit react-redux
  ```

  - create store.js
  - provide Redux Store to React
  - create slices
  - reducers
  - useDispatch and useSelector

- [Animations](https://www.npmjs.com/package/react-native-animatable)
  `npm install react-native-animatable --save`

  remove the [background](https://www.unscreen.com/) from a git

- [React Native Progress](https://www.npmjs.com/package/react-native-progress)
  `npm i react-native-progress`
