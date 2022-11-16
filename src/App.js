import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProducutList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import AddIteam from './components/AddIteam.js'
function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () =>{
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity=0;
    } );
    setProductList(newProductList);
    setTotalAmount(0); 
  };

  const removeIteam = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= 
    newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const  addIteam = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0 
    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddIteam addIteam={addIteam} />
        <ProducutList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeIteam={removeIteam}
        />
      </main>

      <Footer totalAmount={totalAmount} 
      resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
