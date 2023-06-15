import React from "react";
import Product from "./Products";

function ProductList({ AllProduct }) {
  return (
    <div>
      {AllProduct.map((prod,i) => {
        return (
          <div>
            <Product prodI={prod} key={i}/>
          </div>
        )
      })}
    </div>
  );
}

export default ProductList;
