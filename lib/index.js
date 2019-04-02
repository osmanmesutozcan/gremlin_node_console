require("colors");
const repl = require("repl");
const gremlin = require("gremlin");

const traversal = gremlin.process.AnonymousTraversalSource.traversal;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;

function createConnections(address) {
  const g = traversal().withRemote(new DriverRemoteConnection(address));
  const client = new gremlin.driver.Client(address, { traversalSource: "g" });

  return { g, client };
}

function printUsage() {
  console.log("       ", "g".red, " --- ", "traversal source.".yellow);
  console.log("  ", "client".red, " --- ", "client connection.".yellow);
}

function startRepl(args) {
  printUsage();

  const { g, client } = createConnections(args.address);
  const server = repl.start();

  server.context.g = g;
  server.context.client = client;
}

module.exports = startRepl;
