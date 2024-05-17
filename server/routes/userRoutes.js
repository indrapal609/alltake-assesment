import express from "express";
import {
  Alldata,
  uploadCsvFile,
} from "../controllers/userController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();


router.route("/admin/uploadcsv").post(singleUpload,uploadCsvFile);
router.route("/admin/getdata").get(Alldata)



export default router;
