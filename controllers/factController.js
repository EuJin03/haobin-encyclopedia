import asyncHandler from "express-async-handler";
import Fact from "../model/factModel.js";

// @desc Get all facts
// @route GET /api/facts
// @access Public route
const getAllFacts = asyncHandler(async (req, res) => {
  const fact = await Fact.find({});

  if (!fact) throw new Error("Product not Found");

  res.json(fact);
});

// @desc Fetch single product
// @route GET /api/facts/:phraseId
// @access Public route
const getFactByPhraseId = asyncHandler(async (req, res) => {
  const fact = await Fact.find({ phraseId: req.params.phraseId });

  if (!fact) throw new Error("Product not Found");

  res.json(fact);
});

export { getAllFacts, getFactByPhraseId };
