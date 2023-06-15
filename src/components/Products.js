import React,{useState} from "react";

//return each product as a list
function Product({ prodI, i }) {
  return (
    <div className="row mb-4 mt-4">
      <div className="col-4">
        <h3>
          {prodI.name}
          <span class="badge bg-secondary">{prodI.price}</span>
        </h3>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic outlined example "
        >
          <button type="button" class="btn btn-outline-primary">
            -
          </button>
          <button type="button" class="btn btn-outline-primary">
          {count}
          </button>
          <button type="button" class="btn btn-outline-primary">
            +
          </button>
        </div>
      </div>
      <div className="col-2">{prodI.quantity*prodI.price}</div>
    </div>
  );
}

export default Product;
