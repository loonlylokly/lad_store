import ProductCard from "@/component/Cards/ProductCard/ProductCard";
import ProductCardType from "@/types/ProductCardType";

type Props = {
  classNameList: string,
  list: ProductCardType[]
}

export default function ProductsList(props: Props) {
  return (
    <div className={props.classNameList}>
      {props.list.map((item, index) => {
        console.log(item.categories);
        if (item.categories.includes("clothes")){
          return <ProductCard key={item._id} card={item} />;
        }
        return <></>
      })}
    </div>
  )
}