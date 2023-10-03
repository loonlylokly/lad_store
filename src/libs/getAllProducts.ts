import Product from "@/modelsDB/product";
import connectMongoDB from "./mongodb";

export async function getAllProducts() {
  await connectMongoDB();
  return await Product.find();
}