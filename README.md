# introduction

This package is demo how to use npm to create a cli and lib package. And how to install and run it on your machine or in your code.

## run in a local node

```
$ node                             
Welcome to Node.js v16.16.0.
Type ".help" for more information.
> require('@muzalab/easyspot')
{
  App: [Function (anonymous)],
  Emoji: [Function: t],
  EmojiList: [Function: i],
  animals: [ '🐳', '🐉', '🦖' ],
  faces: [ '😀', '😅', '🤔', '👻', '👺' ],
  fruits: [ '🍇', '🍈', '🍊' ],
  ping: [Function (anonymous)],
  version: '0.0.1'
}
```

## run cli on your machine

```
$ yarn global add @muzalab/easyspot
yarn global v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Installed "@muzalab/easyspot@0.0.4" with binaries:
      - easyspot
✨  Done in 8.28s.

$ easyspot                
$ easyspot --help         
easyspot <cmd> [args]

Commands:
  easyspot hello [name]  To run etherspot p2p payment
                         tests

Options:
  --version  Show version number               
  --help     Show help

$ easyspot hello ming     
hello ming welcome to yargs!
```