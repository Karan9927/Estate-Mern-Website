import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    regularPrice: {
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
    bathrooms: {
      type: Number,
    },
    bedrooms: {
      type: Number,
    },
    furnished: {
      type: Boolean,
    },
    parking: {
      type: Boolean,
    },
    type: {
      type: String,
    },
    offer: {
      type: Boolean,
    },
    imageUrls: {
      type: Array,
    },
    userRef: {
      type: String,
    },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

export default Wishlist;
