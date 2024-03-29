import express from "express";
import { getAll, getOne, createInvestiment,updateInvestiment,removeInvestiment } from "../controllers/investimentController.js";
import { checkAuth } from "../middleware/requireAuth.js";

const investimentRouter = express.Router();


// Get Routes
investimentRouter.use(checkAuth)
investimentRouter.get("/meus-investimentos", getAll);
investimentRouter.get("/meus-investimentos/:id", getOne);

// Post Routes

investimentRouter.post("/meus-investimentos", createInvestiment);

// Delete Routes

investimentRouter.delete("/meus-investimentos/:id", removeInvestiment);

// Patch Routes

investimentRouter.patch("/meus-investimentos/:id", updateInvestiment);

export { investimentRouter };
