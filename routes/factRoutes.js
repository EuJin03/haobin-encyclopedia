import express from "express";
const router = express.Router();
import {
  getAllFacts,
  getFactByPhraseId,
  createFact,
  updateFact,
  deleteFact,
} from "../controllers/factController.js";

router.route("/").get(getAllFacts).post(createFact);
router
  .route("/:phraseId")
  .get(getFactByPhraseId)
  .put(updateFact)
  .delete(deleteFact);

export default router;
