# cable-docs 
Network cabling documentation
## Introduction
This project is intended as a exploration/tutorial of Nestjs.
The Nestjs documentation can be one-dimensional : the features are explained in isolation.  However real-life applications need to combine features which can be challenging in Nestjs.  For instance, you'll typically want all of your application to use configuration data, maybe even the code inside `main.ts` of in the **typeorm** configuration file.  Due to the way Nestjs is set up, this is a challenge.

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

## Library
This project uses the below libraries and tools
- npm (v6.14.6)
- nodejs (v12.18.3)
- nestjs/cli (v7.4.1)
- typescript (v3.9.6) - upgrade with `npm -g upgrade typescript`

## Typescript configuration
- javascript target es2019 (ref [node.green](https://node.green/#ES2018))

## vscode support
If you're anything like me you'll want good support for vscode.  Unfortunately, the Nestjs documentation doesn't provice much guidance on this topic.  The project includes a `.vscode` folder with associated files
- `/node_modules` and `dist` folder are excluded from the file explorer

## Getting Started
- install nestejs by typing `npm i -g @nestjs/cli` in the command line
- 