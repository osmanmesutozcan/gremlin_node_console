#!/usr/bin/env node

"use strict";

let program = require("commander");
let gremlin_console = require("../lib");

program
  .version(require("../package.json").version)
  .option(
    "-a, --address <host:port>",
    "the address of the service to connect to (required)"
  )
  .parse(process.argv);

if (!program.address) {
  console.log(
    "\nError: `address` should be in the form of ws://host:port, e.g. ws://127.0.0.1:8182"
  );
  program.help();
}

try {
  gremlin_console(program);
} catch (e) {
  console.error(e);
  process.exit(1);
}
