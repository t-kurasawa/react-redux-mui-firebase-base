# react-redux-mui-firebase-base
## setup
- install node npm https://nodejs.org/ja/download/
- npm install -g yarn
- npm install -g pm2
- npm install -g webpack
- yarn install

## firebase setup
- src/firebase/config.js
- Firebase -> Project Overview -> WebApp -> add Firebase
```
export const firebaseConfig = {
    apiKey: "your config",
    authDomain: "your config",
    databaseURL: "your config",
    projectId: "your config",
    storageBucket: "your config",
    messagingSenderId: "your config"
  };
```
- Firebase -> Develop -> Database -> Rule -> change rule
```
{
  "rules": {
    ".read":"true",
    ".write":"true"
  }
}
```
