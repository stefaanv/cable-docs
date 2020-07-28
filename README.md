# cable-docs

Network cabling documentation

## Introduction

This project is intended as a exploration/tutorial of Nestjs.
The Nestjs documentation explains the features in isolation however real-life applications combine features. Combining Nestjs is not always trivial and well documented.
This project aims to provide an example of a real-life combination to features.

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
- winston (v3.3.3)
- winston daily-file-rotate ()
- nest-winston (v1.3.6)

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
