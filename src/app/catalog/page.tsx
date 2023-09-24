import Category from "@/modules/Category/Category";
import Filter from "@/modules/Filter/Filter";

export default function page() {
  return (
    <section>
      <Filter />
      <h1>Каталог</h1>
      <Category />
    </section>
  )
}