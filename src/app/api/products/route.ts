import connectMongoDB from "@/libs/mongodb";
import Product from "@/modelsDB/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectMongoDB();
  await Product.create(await request.json());
  return NextResponse.json({ message: "Product Created" }, {status: 201});
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find()
  return NextResponse.json({products});
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({message: "Product deleted"}, {status: 200})
}