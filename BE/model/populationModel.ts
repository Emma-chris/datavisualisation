import { Document, Model, model, Schema } from "mongoose";

interface iProps {
  population: [];
}

interface iPropsDate extends iProps, Document {}

const populationModel = new Schema<iPropsDate>(
  {
    population: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsDate>("population", populationModel);
