# React Native Typescript Demo [WIP]

> Small [React Native](https://facebook.github.io/react-native/) project that integrates [Typescript](https://www.typescriptlang.org/).

## Features

- [x] Typescript integration
- [x] Redux integration 
- [x] Hot reloading working
- [x] ImmutableJS integration (redux state as Immutable Record)
- [x] Strong TypeScript compiler checks 
- [x] Redux observable for action observables
- [x] Redux remote devtools integration
- [ ] Codepush integration

## Demo:

![react-native-demo](https://cloud.githubusercontent.com/assets/4490289/24935282/678432b8-1f21-11e7-83a5-f4cf98d5bbfd.gif)

## Getting Started

* Requirements: [Node.js](https://nodejs.org)

Clone this repository:

```sh
git clone https://github.com/inakianduaga/react-native-demo.git
cd react-native-demo
```

Install dependencies:

```sh
npm install
```

Start React Native server (launches react native packager on port `8081` and Typescript compiler in watch mode:

```sh
npm start
```

Launch IOS/Android:
```
npm start ios
npm start android
```

## Debugging:

- **React Native Debugger** (recommended): You can have access to all redux devtools & inspection by running the native [react-native-debugger](https://github.com/jhen0409/react-native-debugger) application
  - Install package for your OS of choice
  - Launch app and enable `remote JS debugger` in the React Native options
  - Launch debugger
- **Via chrome**: on http://localhost:8081/debugger-ui

## Upgrading React Native

To upgrade `react-native` to the latest version, use the package `react-native-git-upgrade`

1. Install globally (locally doesn't work): `npm install -g react-native-git-upgrade`
2. run `react-native-git-upgrade` on the root app folder

## Acknowledgements:

Based on [mrpatiwi/ReactNativeTS](https://github.com/mrpatiwi/ReactNativeTS) as starting point.