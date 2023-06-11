# Delivero Clone
<img width="406" alt="Screenshot 2023-06-11 at 3 25 16 PM" src="https://github.com/corozb/react-native-projects/assets/37992878/0a421ad0-490b-4a8d-9c40-9703f2e1111c">
<img width="422" alt="Screenshot 2023-06-11 at 3 26 02 PM" src="https://github.com/corozb/react-native-projects/assets/37992878/beb0192c-8e7b-4f93-9dd5-a6a79962e5cf">
<img width="432" alt="Screenshot 2023-06-11 at 3 25 49 PM" src="https://github.com/corozb/react-native-projects/assets/37992878/ed6fca24-6969-4e76-95e8-722d49fb47ea">
<img width="436" alt="Screenshot 2023-06-11 at 3 26 08 PM" src="https://github.com/corozb/react-native-projects/assets/37992878/8193c39f-3bcc-4857-8bb6-ecb0056db1bf">




## Video


https://github.com/corozb/react-native-projects/assets/37992878/27d360fd-0eb7-44ba-b81e-48f000dabf74







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
  <img width="1607" alt="Screenshot 2023-06-11 at 3 41 02 PM" src="https://github.com/corozb/react-native-projects/assets/37992878/d06d988e-9803-466f-acbc-976af57d3d43">


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
  ![Screenshot 2023-06-05 at 5 33 39 PM](https://github.com/corozb/react-native-projects/assets/37992878/f395d564-d9b0-4a57-a428-e479aea51ca7)



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

- [MapView](https://docs.expo.dev/versions/latest/sdk/map-view/)
  `npx expo install react-native-maps`
  ![Screenshot 2023-06-09 at 9 33 44 PM](https://github.com/corozb/react-native-projects/assets/37992878/3bc6cfcb-4c09-44fe-b1a3-62a1a2078268)

