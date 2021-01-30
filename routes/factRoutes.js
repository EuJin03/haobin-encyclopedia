import express from "express";
const router = express.Router();
import {
  getAllFacts,
  getFactByPhraseId,
} from "../controllers/factController.js";

router.route("/").get(getAllFacts);
router.route("/:phraseId").get(getFactByPhraseId);

export default router;
