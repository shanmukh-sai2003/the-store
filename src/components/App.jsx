import React from "react";
import Header from "./header/Header";
import ProductList from "./productListing/ProductList";
import Footer from "./footer/Footer";

function App() {
    return ( 
        <div className="app">
            <Header></Header>
            <ProductList></ProductList>
            <Footer></Footer>
        </div>
    )
}

export default App;