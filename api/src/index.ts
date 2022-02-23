import express from "express";
import userController from "./controllers/userController";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userController);

app.listen(5000, () =>
  console.log("API is listening at http://localhost:5000")
);
