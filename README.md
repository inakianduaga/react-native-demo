# React Native Typescript Demo [WIP]

> Small [React Native](https://facebook.github.io/react-native/) project that integrates [Typescript](https://www.typescriptlang.org/).

## Features

- [x] Typescript integration
- [x] Redux integration 
- [x] Hot reloading working
- [x] ImmutableJS integration (redux state as Immutable Record)
- [x] Strong TypeScript compiler checks 
- [ ] Redux observable for action observables

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

- Via chrome on http://localhost:8081/debugger-ui

## Acknowledgements:

Based on [mrpatiwi/ReactNativeTS](https://github.com/mrpatiwi/ReactNativeTS) as starting point.