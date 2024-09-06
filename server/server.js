const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;
const cors = require("cors");
const corsOptions = {
  origin: "http://127.0.0.1:5173",
};
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/files", express.static(path.join(__dirname, "files")));

const temp = path.join(__dirname, "files");

console.log(temp);

app.use("/", userRoutes);

// app.get("/", (req, res) => {
//   res.json({ message: "asd" });
// });

app.listen(process.env.port || PORT, () =>
  console.log(`The server has been runned on port: ${process.env.port || PORT}`)
);
