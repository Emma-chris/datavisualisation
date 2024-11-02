import { Application, Request, Response } from "express";
import router from "./router/router";

export const mainApp = (app: Application) => {
  try {
    app.use("/api", router);
    app.get("/", (req: Request, res: Response): any => {
      return res.status(200).json({
        message: "Default API response",
        data: [],
        status: 202,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
