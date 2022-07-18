import React from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
  
  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  
  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button
          onClick={() => {}}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {}}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-dark border border-info" style={{maxHeight:'95%', maxWidth:'50%'}}>
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body" style={{maxHeight:'100%', maxWidth:'100%'}}>
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap" >
          {cartDescrption}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">₹ {cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
