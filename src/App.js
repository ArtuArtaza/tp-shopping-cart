import "./App.css";
import { useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import { Routes, Route } from "react-router-dom";
import { useStore } from "./store/useStore";
import ProductView from "./components/ProductView";
const ProductsReady = ({ data, isLoading }) =>
  isLoading ? <h1>Loading...</h1> : <Products productsList={data} />;
function App() {
  const url = "https://fakestoreapi.com/products";
  const { data, isLoading } = useFetch(url);
  const { itemId,setData } = useStore();
  useEffect(() => {
    setData(data)
  }, [data])
  return (
    <div className="App vh-100">
      <NavigationBar />
      <ProductView/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductsReady isLoading={isLoading} data={data} />}
        >
          <Route path=":id" element={<ProductView />} />
        </Route>
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
