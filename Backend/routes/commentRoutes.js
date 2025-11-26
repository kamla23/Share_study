import express from "express";
import authMid from "../middlewares/authMiddleware.js";
import {
  addComment,
  getComments
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/add", authMid, addComment);
router.get("/:id", getComments);

export default router;
