import Product from "@/models/product";
import connectMongoDB from "./mongodb";
import { NextResponse } from "next/server";

export async function getAllProducts() {
  await connectMongoDB();
  return await Product.find();
}