import { Request, Response } from "express";
import csv from "csvtojson";
import populationModel from "../model/populationModel";
import economicModel from "../model/economicModel";

export const createEconomic = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await economicModel.create({
      economic: file,
    });

    return res.status(201).json({
      message: "Economic data created successfully",
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      meessgae: "Economic data isn't create successfully",
      status: 404,
    });
  }
};

export const readEconomic = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await economicModel.create({
      economic: file,
    });

    return res.status(200).json({
      message: "Economic data created successfully",
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      meessgae: "Economic data isn't create successfully",
      status: 404,
    });
  }
};

export const createPopulation = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await populationModel.create({
      Population: file,
    });

    return res.status(201).json({
      message: "Population data created successfully",
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      meessgae: "Population data isn't create successfully",
      status: 404,
    });
  }
};

export const readPopulation = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await populationModel.create({
      economic: file,
    });

    return res.status(200).json({
      message: "Economic data created successfully",
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      meessgae: "Economic data isn't create successfully",
      status: 404,
    });
  }
};
