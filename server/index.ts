import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const port = 7777;

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
