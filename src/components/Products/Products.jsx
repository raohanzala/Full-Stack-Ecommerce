// import { useContext } from "react";
import Product from "./Product/Product";
// import { Context } from "../../utils/context";

function Products({ innerPage, headingText, products }) {
  // const { products } = useContext(Context);

  console.log(products)

  return (
    <div className="pb-9 pt-9">
      {!innerPage && (
        <h2 className="mb-8 text-2xl font-semibold text-center">
          {headingText}
        </h2>
      )}
      <div className="grid grid-cols-4 gap-5">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
}

export default Products;
