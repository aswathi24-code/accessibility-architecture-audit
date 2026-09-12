const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Accessibility Audit API is running"
  });
});

app.get("/api/audit", (req, res) => {
  res.json({
    issues: 5,
    status: "completed"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
