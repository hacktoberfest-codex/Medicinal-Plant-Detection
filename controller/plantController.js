import plantModel from "../models/plantModel.js";
import fs from "fs";
import csv from "csvtojson";

export const getPlantController = async (req, res) => {
  try {
    const { name } = req.params;

    const plant = await plantModel.findOne({ scientificName: name });
    res.status(201).send({
      success: true,
      message: "Plant retrived sucessfully",
      plant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting plant details",
    });
  }
};

export const uploadPlantController = async (req, res) => {
  try {
    var plantData = [];
    const filePath = req.file.path;
    csv()
      .fromFile(filePath)
      .then(async (response) => {
        for (var x = 0; x < response.length; x++) {
          plantData.push({
            scientificName: response[x].scientificName,
            localName: response[x].localName,
            features: response[x].features,
            photo: response[x].photo,
          });
        }
        await plantModel.insertMany(plantData);
      });
    res.status(200).send({
      success: true,
      message: "upload successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting plant details",
    });
  }
};
export const postFeedback = async (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "upload successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting plant details",
    });
  }
};
