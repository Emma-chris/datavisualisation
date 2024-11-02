import { Document, model, Model, Schema } from "mongoose";

interface iProps {
  economic: [];
}

interface iPropsDate extends iProps, Document {}

const economicModel = new Schema<iPropsDate>(
  {
    economic: { type: [] },
  },
  {
    timestamps: true,
  }
);

export default model<iPropsDate>("economic", economicModel);
