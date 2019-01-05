
# Microsoft Bot-framework boilerplate
## Using Node, Redux, Babel & ES6
LUIS already setup.

![Microsoft Botframework](https://www.topbots.com/wp-content/uploads/2017/02/microsoft_bot_framework_800x350_web.jpg "Logo botframework")


## Overview

This sample based on the original [demo](https://github.com/Microsoft/BotFramework-Samples/tree/master/blog-samples/Node/Blog-Redux-Bot) is to showcase the flexibility of the Bot Service, by demonstrating that you can author rich conversational experiences using whatever technologies/libraries you'd like. This sample bot uses Redux, a popular JavaScript framework for application state management, and Redux-Saga to recreate an existing city search bot sample.

## Installing

Install dependencies

```
npm install
```
## Run

```
npm start
```
## Emulator
This bot runs by default on **localhost:3978**, which you can run directly using the Bot [Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator).

## LUIS - Language Understanding
Make sure you setup in Azure your LUIS account and copy your credentials in the **.env.example** and create your **.env** with your own credentials.

```
cp .env.example .env
```

## Debug

If you are using VS Code, make sure you have setup the ES6 debug in **launch.json**
```
"configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/src/index.js",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/babel-node",
      "cwd": "${workspaceFolder}",
      "sourceMaps": true,
      "env": {
        "NODE_ENV": "development"
      }
    }
  ]
```

## Build

This will build a compilated version under the */dist* folder
with the babel compiled code.

```
npm build
```

## Authors

    Juan Pablo Ortiz (Adapt MS code from documentation to es6 and refactor)

See also the original code from Microsoft bot framework templaes [Here](https://github.com/Microsoft/BotFramework-Samples/tree/master/blog-samples/Node/Blog-Redux-Bot)

## License

This project is licensed under the MIT License.

## Todos
This a list of currenlty implementations pending on the boilerplate.

 - welcome message
 - shipping dialog - intent
 - company info dialog - intent
 - payment info dialog - intent
 - bot info dialog - intent