#!/usr/bin/env node

require("yargs")
  .scriptName("easyspot")
  .usage("$0 <cmd> [args]")
  .command(
    "hello [name]",
    "To run etherspot p2p payment tests",
    (yargs) => {
      yargs.positional("name", {
        type: "string",
        default: "Ming",
        describe: "the name to say hello to",
      });
    },
    function (argv) {
      console.log("hello", argv.name, "welcome to yargs!");
    }
  )
  .help().argv;
