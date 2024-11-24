import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder"
import Login from "./pages/Login";
import Orders from "./pages/Orders"
import Verify from "./pages/Verifiy"


export default function App() {
  return (
    <main className="overflow-hidden text-[#404040] bg-primary">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/collection" element={<Collection />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/placeorder" element={<PlaceOrder />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/verify" element={<Verify />}/>
      </Routes>
    </main>
  )
}