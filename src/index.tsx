import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Add a new route
app.get("/api", (c) => {
  return c.json({ message: "Hello Hono!" });
});

// Add a new route with a parameter
app.get("/api/hello/:name", async (c) => {
  const name = c.req.param('name');
  return c.text(`Hello, ${name}!`);
});

export default app;