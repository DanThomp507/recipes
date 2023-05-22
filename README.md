# Recipe App

This is a simple recipe app built with React and Redux. It allows users to view and manage recipes.

## Features

- View a list of recipes
- Add a new recipe
- Edit an existing recipe
- Delete a recipe

## Installation

1. Clone the repository: `git clone <https://github.com/DanThomp507/recipes.git>`
2. Navigate to the project directory: `cd recipes`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and visit `http://localhost:3000` to access the app.

## Time Spent on App

I'd say I spent somewhere between 3-4 hours building this. Most of that time was debating best approaches for making sure Redux state was persistent.

## Issues Encountered

The API reached its max limit so you couldn't actually persistently hit it. I had been able to do so previously without issue. But this just meant that I had to create some workarounds, which was fine!

## Dependencies

- [@reduxjs/toolkit](https://redux-toolkit.js.org/): A package that provides a set of utilities and abstractions for working with Redux.
- [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/): Custom Jest matchers for testing DOM elements.
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/): Utilities for testing React components.
- [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/): Utilities for simulating user events.
- [@types/jest](https://www.npmjs.com/package/@types/jest): TypeScript type definitions for Jest.
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript type definitions for Node.js.
- [@types/react](https://www.npmjs.com/package/@types/react): TypeScript type definitions for React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): TypeScript type definitions for React DOM.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Entry point to the DOM and server renderers for React.
- [react-redux](https://react-redux.js.org/): Official React bindings for Redux.
- [react-scripts](https://create-react-app.dev/docs/getting-started/): Scripts and configuration used by Create React App.
- [redux-persist](https://github.com/rt2zz/redux-persist): Library for persisting and rehydrating Redux store state.
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework for rapidly building custom user interfaces.
- [typescript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [web-vitals](https://github.com/GoogleChrome/web-vitals): Library for measuring web vitals.

## Scripts

- `start`: Starts the development server.
- `build`: Builds the app for production.
- `test`: Runs the test suites.
