import express from "express";
import authMid from "../middlewares/authMiddleware.js";
import {
  addIdea,
  getIdeas,
  updateIdea,
  deleteIdea,
  likeIdea
} from "../controllers/ideaController.js";

const router = express.Router();

router.post("/add", authMid, addIdea);
router.get("/all", getIdeas);
router.put("/update/:id", authMid, updateIdea);
router.delete("/del/:id", authMid, deleteIdea);
router.post("/like/:id", authMid, likeIdea);

export default router;
