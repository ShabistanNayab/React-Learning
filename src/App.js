import "./App.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import React,{useState} from "react";

function App() {
  let AllProduct = [
    {
      id: "123",
      name: "Product 1",
      quantity : 0,
      price : 999
    },
    {
      id: "456",
      name: "Product 2",
      quantity : 0,
      price : 999
    },
    {
      id: "789",
      name: "Product 3",
      quantity : 0,
      price : 999
    },
  ];

  let [count,setAllProducts] = useState(products)

  let incrementCount =()=>{
    setAllProducts(count+1)
  }
  
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ProductList AllProduct={AllProduct} />
      </div>
    </div>
  );
}

export default App;
