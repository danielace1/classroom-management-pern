import express from "express";
import cors from "cors";

import subjectsRoute from "./routes/subjects";

const PORT = 8000;
const app = express();

if (!process.env.CLIENT_URL)
  throw new Error("CLIENT_URL is not set in .env file");

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/subjects", subjectsRoute);

app.get("/", (_req, res) => {
  res.send("Classroom Management API is running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
