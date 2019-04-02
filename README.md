### Getting Started

Only supports node version >10

```bash
npm install -g gremlin_node_console
```

### Example

Repl supports top level await.
Here is an example usage.

```bash
gremlin_console -a ws://127.0.0.1:8181
#> await client.submit('g.addV("hello").iterate()');
```
