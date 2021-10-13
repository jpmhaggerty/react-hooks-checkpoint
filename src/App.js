import React, { useEffect, useState } from "react";
import ProductBox from "./components/ProductBox";

var ProductArray = React.createContext();
var ProductList = React.createContext();

async function getProductList() {
  //let res = await fetch("http://52.26.193.201:3000/products/1/styles");
  let res = await fetch("http://52.26.193.201:3000/products/list");
  let json = await res.json();
  console.log("JSON string: ", json);
  ProductList = json;
  console.log("Product List: ", ProductList)
  let imageUrl = await json[0].url;
  return imageUrl;
}

function getProductName() {
  // let faker = require("faker");
  // return faker.name.firstName();
  return "product"
}

async function addProduct(e) {
  e.preventDefault();
  let imageUrl = await getProductList();
  let productName = getProductName();
  let newProduct = { name: productName, url: imageUrl };
  ProductArray.push(newProduct);
}

function App() {
  const [update, setUpdate] = useState();
  useEffect(() => {
    ProductArray = [];
    addProduct(window.event);
  }, []);
  return (
    <div className="App">
      <div className="app-title flex-column">
        <div>Product Page</div>
        <button
          onClick={(e) => {
            setUpdate(addProduct(e));
          }}
        >
          Product
        </button>
      </div>
      <ProductBox products={ProductList} />
    </div>
  );
}

export default App;