## 🚀 How make the setup

- [Router](https://expo.github.io/router/docs)
  ```sh
  npx create-expo-app@latest -e with-router ./
  ```
- Add [layout](https://expo.github.io/router/docs/guides/)
- Packages
  ```sh
  npm install expo-font axios react-native-dotenv
  ```
- If there's an error with you try to see in the phone

  ```
  npm install -g expo-cli
  expo-cli start --tunnel
  npm start
  ```

- The next folders were pasted so it could be reused in another project

  - constants
  - styles
  - assets

- To deploy we need to do the next steps:
  - `npm install -g expo-cli`
  - `expo publish` - yes

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)
