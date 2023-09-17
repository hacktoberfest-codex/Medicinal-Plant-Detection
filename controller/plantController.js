import plantModel from "../models/plantModel.js";
import fs from "fs";
import csv from "csvtojson";
import feedbackModel from "../models/feedbackModel.js";

export const getPlantController = async (req, res) => {
  try {
    const { name } = req.params;
    console.log(name);
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
    const { score, description } = req.body; //req.fileds
    if (!score) {
      return res.send({ message: "Score is required!" });
    }
    if (!description) {
      return res.send({ message: "Description is required!" });
    }
    const feed = await new feedbackModel({
      score,
      description,
    }).save();
    res.status(200).send({
      success: true,
      message: "review posted successfully",
      feed,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in posting review",
    });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const feed = await feedbackModel.find({}).sort({ createdAt: -1 });
    res.status(201).send({
      success: true,
      totalCount: feed.length,
      message: "Feedback",
      feed,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting feedback",
    });
  }
};
export const getResultName = async (req, res) => {
  try {
    async function loadImage(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => resolve(tf.browser.fromPixels(img));
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      });
    }

    function preprocessImage(image) {
      const resizedImage = tf.image.resizeBilinear(image, [128, 128]); // Adjust size if necessary
      return resizedImage;
    }

    // Setting up tfjs with the model we downloaded
    tf.loadGraphModel("model1/model.json").then(function (model) {
      window.model = model;
    });

    var predict = function (input) {
      if (window.model) {
        window.model
          .predict([tf.tensor(input).reshape([28, 28, 1])])
          .array()
          .then(function (scores) {
            scores = scores[0];
            predicted = scores.indexOf(Math.max(...scores));
          });
      } else {
        // The model takes a bit to load,
        // if we are too fast, wait
        setTimeout(function () {
          predict(input);
        }, 50);
      }
    };
    const file = req.body;
    if (file) {
      // Read and preprocess the selected image
      const image = await loadImage(file);
      let tensor = preprocessImage(image);

      // let tensor = image;
      tensor = tf.expandDims(tensor, 0);

      // Make predictions using the model
      // console.log(model);
      const predictions = await model.predict(tensor);
      let scores = await tf.softmax(predictions).data();
      index = scores.indexOf(Math.max(...scores));
      const name = plantClasses[index];

      res.status(201).send({
        success: true,
        totalCount: feed.length,
        message: "Feedback",
        name,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting feedback",
    });
  }
};
