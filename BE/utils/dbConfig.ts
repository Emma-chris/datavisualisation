import { connect } from "mongoose";
import env from "dotenv";
env.config();

export const dbconfing = async () => [
  await connect(process.env.DB as string).then(() => {
    console.clear();
    console.log("connected to Emma chris API");
  }),
];
