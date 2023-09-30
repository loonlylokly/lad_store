import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, {params}: any) {
  const {id} = params;
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, await request.json());
  return NextResponse.json({message: "Product updated"}, {status: 200});
}

export async function GET(request: NextRequest, {params}: any) {
  const {id} = params;
  await connectMongoDB();
  const product = await Product.findOne({_id: id});
  return NextResponse.json({product}, {status: 200});
}