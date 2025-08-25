const http = require("http");

const port = 3000;
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];


const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/users" && req.method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify(users));

  } else if (req.url === "/api/users" && req.method === "POST") {
    const newUser = await readBody(req);
    newUser.id = users.length + 1;
    users.push(newUser);

    res.writeHead(200);
    res.end(JSON.stringify(newUser));

  } else if (req.url.startsWith("/api/users/") && req.method === "GET") {
    const id = Number(req.url.split("/").pop());
    const user = users.find((user) => user.id === id);

    if (user) {
      res.writeHead(200);
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "User not found" }));
    }

  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "404 - Page not found" }));
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(JSON.parse(body));
      });
  });
}
