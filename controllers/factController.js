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

// @desc delete fact
// @route DELETE /api/facts/:phraseId
// @access Private/Admin
const deleteFact = asyncHandler(async (req, res) => {
  const fact = await Fact.findOne({ phraseId: req.params.phraseId });

  if (fact) {
    await fact.remove();
    res.json({ message: "Fact removed" });
  } else {
    res.status(404);
    throw new Error("Fact not found");
  }
});

// @desc Create a fact
// @route POST /api/facts
// @access Public route
const createFact = asyncHandler(async (req, res) => {
  const prevPhraseId = await Fact.findOne().sort({ phraseId: -1 });

  const fact = new Fact({
    phraseId: prevPhraseId.phraseId + 1,
    content: req.body.content,
    author: req.body.author,
  });

  const createdFact = await fact.save();
  res.status(201).json(createdFact);
});

// @desc Update a fact
// @route PUT /api/facts/:phraseId
// @access Private/Admin
const updateFact = asyncHandler(async (req, res) => {
  const { content } = req.body;

  const fact = await Fact.findOne({ phraseId: req.params.phraseId });

  if (fact) {
    fact.content = content;

    const updatedFact = await fact.save();
    res.status(201).json(updatedFact);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export { getAllFacts, getFactByPhraseId, createFact, deleteFact, updateFact };
