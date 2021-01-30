import express from "express";
const router = express.Router();
import {
  getAllFacts,
  getFactByPhraseId,
  createFact,
  updateFact,
  deleteFact,
} from "../controllers/factController.js";
import admin from "../middleware/authMiddleware.js";

router.route("/").get(getAllFacts).post(admin, createFact);
router
  .route("/:phraseId")
  .get(getFactByPhraseId)
  .put(admin, updateFact)
  .delete(admin, deleteFact);

export default router;
