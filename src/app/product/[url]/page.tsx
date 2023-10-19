import { getProduct } from '@/libs/getProduct';
import Product from '@/modules/Product/Product';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProduct(params.slug);
  if (data === null) {
    notFound();
  }

  return (
    <>
      <Product data={data} />
    </>
  );
}
