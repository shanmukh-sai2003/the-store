import React from "react";
import './ProductList.css';
import ProductCard from "./ProductCard";

function ProductList() {
    return (
        <div className="productList">
            <h2>FEATURED PRODUCTS</h2>
            <div className="productListRow">
                <ProductCard productName = "product_1" productPrice="price of that product"></ProductCard>
                <ProductCard productName = "product_2" productPrice="price of that product"></ProductCard>
                <ProductCard productName = "product_3" productPrice="price of that product"></ProductCard>
                <ProductCard productName = "product_4" productPrice="price of that product"></ProductCard>
            </div>
        </div>
    )
}

export default ProductList;