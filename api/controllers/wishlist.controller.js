import Wishlist from "../models/wishlist.model.js";
import { errorHandler } from "../utils/error.js";

export const createWishlist = async (req, res, next) => {
  try {
    const wishlist = await Wishlist.create(req.body);
    return res.status(201).json(wishlist);
  } catch (error) {
    next(error);
  }
};

export const deleteWishlist = async (req, res, next) => {
  const wishlist = await Wishlist.findById(req.params.id);

  if (!wishlist) {
    return next(errorHandler(404, "Wishlist Empty!"));
  }

  if (req.user.id !== wishlist.userRef) {
    return next(errorHandler(401, "You can only delete your own Wishlist!"));
  }

  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getWishlistItems = async (req, res, next) => {
  try {
    const wishlist = await Wishlist.find({ userRef: req.params.id });
    res.status(200).json(wishlist);
  } catch (error) {
    next(error);
  }
};
