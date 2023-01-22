import { Investiment } from "../models/Investiment.js";
import mongoose from "mongoose";

//GET

const getAll = async (req, res) => {
  const investiments = await Investiment.find().sort({ createdAt: -1 });
  res.status(200).json(investiments);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not Found" });
  }
  const investiment = await Investiment.findById(id);

  res.status(200).json(investiment);
};

//CREATE
const createInvestiment = async (req, res) => {
  const { titulo, valor, tipo, rendimento } = req.body;

  try {
    const investiment = await Investiment.create({ titulo, valor, tipo, rendimento });
    res.status(200).json(investiment);
  } catch (error) {
    res.status(400).json({ error: "Failed To Create" });
  }
};

//UPDATE

const updateInvestiment = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not Found" });
  }

  const updatedInvestiment = await Investiment.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!updateInvestiment) {
    return res.status(400).json({ error: "Not Found" });
  }

  res.status(200).json({ updatedInvestiment });
};

//DELETE

const removeInvestiment = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not Found" });
  }

  const investiment = await Investiment.findOneAndDelete({ _id: id });
  if (!investiment) {
    return res.status(400).json({ error: "Not Found" });
  }
  res.status(200).json(investiment);
};

export { createInvestiment, updateInvestiment, removeInvestiment, getAll, getOne };
