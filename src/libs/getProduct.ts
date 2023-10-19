import Product from '@/modelsDB/product';
import connectMongoDB from './mongodb';

export async function getProduct(url: string) {
  await connectMongoDB();
  try {
    const product = await Product.findOne({ url: `/${url}` });
    return product;
  } catch (error) {
    console.log(error);
  }
}
