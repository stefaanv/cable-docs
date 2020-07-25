# cable-docs

Network cabling documentation

## Introduction

This project is intended as a exploration/tutorial of Nestjs.
The Nestjs documentation can be one-dimensional : the features are explained in isolation. However real-life applications need to combine features which can be challenging in Nestjs. You'll typically want all of your application to use one configuration data, even **typeorm**, but with standard Nestjs the typeorm configuration will be in a seperate config file. You may even want the port number to be defined in the config file ! That's a challenge because the configuration service needs dependency injection which isn't active yet at the time you have to specify the port number.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development watch + debug
$ npm run start:debug
+ select `Attach to start:debug` in the debugger

OR

Press 'F5' in vscode (no watch mode in this case)

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database

The project uses a MySql database
blablabla

## Library

This project uses the below libraries and tools

- npm (v6.14.6)
- nodejs (v12.18.3)
- nestjs/cli (v7.4.1)
- typescript (v3.9.6) - upgrade with `npm -g upgrade typescript`

## Typescript configuration

- javascript target es2019 (ref [node.green](https://node.green/#ES2018))
- module path aliassing is set up for both debugging options ([the `Debug Nest Framework` option uses the `tsconfig-paths-bootstrap.js` file and the `tsconfig-paths` package](https://dev.to/rubiin/resolving-path-alias-in-nestjs-projects-11o1))

## vscode support

If you're anything like me you'll want good support for vscode. Unfortunately, the Nestjs documentation doesn't provice much guidance on this topic. The project includes a `.vscode` folder with associated files

- `/node_modules` and `dist` folder are excluded from the file explorer - `files.exclude` setting
- Fira-code font set up (you may need to install the font on your machine) - `editor.fontFamily` setting

## Getting Started

- install nestjs by typing `npm i -g @nestjs/cli` in the command line

## Configuration

- The configuration is provided by the `@src/config/config.ts` file. With this setup you can map the `config` folder
  to an external host folder in the production container for easy configuration changes. You should put secrets
  in environment variables or use docker secrets.
