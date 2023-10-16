import connectMongoDB from "@/libs/mongodb";
import Product from "@/modelsDB/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectMongoDB();
  try {
    await Product.create(await request.json());
    return NextResponse.json({ message: "Product Created" }, {status: 201});
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "Internal Server Error"}, {status: 500});
  }
}

export async function GET(request: NextRequest) {
  await connectMongoDB();
  try {
    const page = parseInt(request.nextUrl.searchParams.get('page') || '1')-1 || 0;
    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '5');
    const search = request.nextUrl.searchParams.get('search') || '';
    const priceFrom = parseInt(request.nextUrl.searchParams.get('priceFrom') || '0') || 0;
    const priceTo = parseInt(request.nextUrl.searchParams.get('priceTo') || '100000') || 100000;
    let sort = request.nextUrl.searchParams.get('sort') || 'saleDesc';
    let category = request.nextUrl.searchParams.get('category') || 'all';
    const categoryList = ['clothes', 't-shirt', 'sweatshirt', 'pen', 'dishes'];
    let categories;
    
    if (category === 'all') {
      categories = [...categoryList];
    } else {
      categories = category.split(',');
    }

    const sortBy: Record<string, string> = {
      'ordersDesc': '-orders',
      'priceAsc': 'price',
      'priceDesc': '-price',
      'saleDesc': '-sale',
    };
    
    const products = await Product.find()
      .where('categories')
      .in([...categories])
      .where('price')
      .gte(priceFrom)
      .lte(priceTo)
      .sort(sortBy[sort] || '-sale')
      .skip(page * limit);
      
    return NextResponse.json({products});
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "Internal Server Error"}, {status: 500});
  }
}

export async function DELETE(request: NextRequest) {
  await connectMongoDB();
  try {
    const id = request.nextUrl.searchParams.get("id");
    await Product.findByIdAndDelete(id);
    return NextResponse.json({message: "Product deleted"}, {status: 200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "Internal Server Error"}, {status: 500});
  }
}