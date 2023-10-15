import connectMongoDB from "@/libs/mongodb";
import Category from "@/modelsDB/category";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectMongoDB();
  try {
    await Category.create(await request.json());
    return NextResponse.json({ message: "Category Created" }, {status: 201});
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "Internal Server Error"}, {status: 500});
  }
}

export async function GET(request: NextRequest) {
  await connectMongoDB();
  try {
    const categories = await Category.find();
    return NextResponse.json({categories});
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "Internal Server Error"}, {status: 500});
  }
}

export async function DELETE(request: NextRequest) {
  await connectMongoDB();
  try {
    const id = request.nextUrl.searchParams.get("id");
    await Category.findByIdAndDelete(id);
    return NextResponse.json({message: "Category deleted"}, {status: 200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "Internal Server Error"}, {status: 500});
  }
}