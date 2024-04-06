import express from "express";
import {
  createWishlist,
  deleteWishlist,
  getWishlistItems,
} from "../controllers/wishlist.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createWishlist);
router.delete("/delete/:id", verifyToken, deleteWishlist);
router.get("/list/:id", getWishlistItems);

export default router;
