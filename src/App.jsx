import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Nav,
  MobileNav,
  Footer,
  CancelShade,
  Cart,
  CancelCart,
} from "./components";
import { Home, About, Contact, Login, Shop, ProductDetails } from "./pages";
import { SharedNavStateProvider } from "./components/SharedNavState";
import { CartContextProvider } from "./components/CartContext";

function App() {
  return (
    <BrowserRouter>
      <main className="font-custom">
        <SharedNavStateProvider>
          <CartContextProvider>
            <Nav />
            <MobileNav />
            <CancelShade />
            <Cart />
            <CancelCart />

            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product" element={<ProductDetails />} />
            </Routes>
          </CartContextProvider>
        </SharedNavStateProvider>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
