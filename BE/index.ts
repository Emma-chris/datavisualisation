import express, { Application } from "express";
import env from "dotenv";
env.config();
import cors from "cors";
import { mainApp } from "./mainApp";
import { dbconfing } from "./utils/dbConfig";

export const app: Application = express();

app.use(express.json());
app.use(cors());

mainApp(app);
let server = app.listen(process.env.PORT, () => {
  dbconfing();
});

process.on("uncaughtException", (err: Error) => {
  console.log("unhandledRejection: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection:", reason);

  server.close(() => {
    process.exit(1);
  });
});
