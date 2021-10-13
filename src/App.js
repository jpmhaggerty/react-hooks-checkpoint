import React, { useEffect, useState } from "react";
import ProductBox from "./components/ProductBox";

var ProductList = React.createContext();

async function getProductList() {
  let res = await fetch("http://52.26.193.201:3000/products/list");
  ProductList = await res.json();
  //console.log("Product List: ", ProductList);
}

function App() {
  const [update, setUpdate] = useState();
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <React.Fragment>
      <button onClick={(event) => setUpdate(event)}>Launch</button>
        <ProductBox onClick={(event) => console.log(event)} products={ProductList} />
    </React.Fragment>
  );
}

//   const [moreData, setMoreData] = useState();
//   useEffect(() => {
//     addProduct(window.event);
//   }, [getProductList]);
//   useEffect(() => {
//     console.log("More data: ", moreData);
//   }, [moreData, update);

// }

export default App;
