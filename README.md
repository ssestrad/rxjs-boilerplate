# RxJS Boilerplate

Simple boilerplate for starting a project using RxJS with ESNext and CSS Modules.

It includes a simple demo app for demonstrating the use of RxJS.
The app is a real-time wikipedia search interface.
It shows how you can leverage RxJS to process user input and network calls.

The aim of this boilerplate is to use no other framework or dependencies other than RxJS and dependencies that don't add to your JS bundle while still providing enough pieces to build a meaningful app. As such, a simple component project structure was setup with some helper classes found in the `lib` folder to simplify building the UI. The only other dependency apart from RxJS that gets included in the JS bundle is DOMPurify to prevent XSS attacks when rendering html using the `Component` class.

A TypeScript version of this project is available [here](https://github.com/ssestrad/rxjs-typescript-boilerplate)

## Quick Start

Make sure to have [nodeJS](https://nodejs.org) 8 or greater installed.

Clone this repo

`git clone https://github.com/ssestrad/rxjs-boilerplate.git`

Install dependencies

`npm install`

Start app

`npm start`

This will open a window with the demo at: [http://localhost:8080](http://localhost:8080)

## To create a Release Build

`npm build`

## Project Folder Structure

```bash
.
├───src/                            # main source code for app
│   ├───components/                 # reusable UI components. Usually consists of a JS and CSS file pairs. Because the project is setup with CSS modules, any class names will be isolated to the component.
│   ├───lib/                        # common classes
│   │   ├───component.js            # simple class for making adding/removing, showing/hiding of DOM elements a bit easier
│   │   ├───logger.js               # simple class for logging avoiding the use of console
│   │   └───template-operators.js   # simple set of functions for doing conditionals statements with string interpolation, poor man's template system
│   ├───services/                   # classes for making network requests, i.e., API calls
│   ├───styles/                     # global CSS files
│   ├───view-controllers/           # UI layers that bind together components, services, and user interactions
│   ├───app.js                      # entry point of application
│   └───config.js                   # static configuration values used in the application
├───.eslintrc.js                    # ESLint configuration
├───README.md                       # what you're reading right now
├───index.html                      # entry html page for the application
├───package-lock.json               # package configuration version lock
├───package.json                    # package configuration that includes the list of external dependencies
└───webpack.config.js               # configures webpack
```
