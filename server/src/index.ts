import express from "express";

const PORT = 8000;
const app = express();

// Parse incoming JSON bodies
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Classroom Management API is running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
