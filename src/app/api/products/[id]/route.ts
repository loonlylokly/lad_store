import connectMongoDB from '@/libs/mongodb';
import Product from '@/modelsDB/product';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  await connectMongoDB();
  await Product.findByIdAndUpdate(
    request.nextUrl.searchParams.get('id'),
    await request.json(),
  );
  return NextResponse.json({ message: 'Product updated' }, { status: 200 });
}

export async function GET(request: NextRequest) {
  await connectMongoDB();
  const product = await Product.findOne({
    _id: request.nextUrl.searchParams.get('id'),
  });
  return NextResponse.json({ product }, { status: 200 });
}
