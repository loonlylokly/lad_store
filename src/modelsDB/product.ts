import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true},
    description: { type: String, required: true, trim: true},
    thubnail_url: { type: String, required: true},
    images_urls: [String],
    categories: {type: [String], required: true},
    price: { type: Number, required: true},
  },
  {
    timestamps: true
  }
)

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
