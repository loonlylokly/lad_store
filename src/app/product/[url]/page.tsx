import { getProduct } from "@/libs/getProduct";
import Product from "@/modules/Product/Product";
import { notFound } from "next/navigation"

export default async function ProductPage(props: any) {
  const data = await getProduct(props.params.url);
  if (data === null) {
    notFound();
  }
  
  return (
    <>
      <Product data={data}/>
    </>
  )
}
