import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    url: { type: String, required: true },
    thubnail_url: { type: String, required: true },
    images_urls: [String],
    categories: {type: [String], required: true },
    availability: { type: Boolean, required: true },
    orders: { type: Number, required: true },
    price: { type: Number, required: true },
    sale: { type: Number },
  },
  {
    timestamps: true
  }
)

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
