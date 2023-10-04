import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import {
  getFeedback,
  getPlantController,
  getResultName,
  postFeedback,
  uploadPlantController,
} from "../controller/plantController.js";

//router object
const router = express.Router();
const plant = express();
plant.use(bodyParser.urlencoded({ extended: true }));
plant.use(express.static("./public"));

var storage = multer.diskStorage({
  destination: (req, files, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/create", upload.single("file"), uploadPlantController);

export default router;

// router.get("/:name", getPlantController);
router.get("/:name", getPlantController);

router.post("/feedback", postFeedback);
router.get("/feedback", getFeedback);

router.post("/mlmodel", getResultName);
