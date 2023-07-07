import React from "react";
import "./ProductCard.css"

function ProductCard(props) {
    return (
        <div className="productCard">
            <img src={require("../images/logo.png")} alt="product_1"></img>
            <h4>{props.productName}</h4>
            <p>{props.productPrice}</p>
        </div>
    )
}

export default ProductCard;