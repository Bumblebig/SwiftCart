import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Nav,
  MobileNav,
  Footer,
  CancelShade,
  Cart,
  CancelCart,
  Checkout,
  Loader,
} from "./components";
import { SharedNavStateProvider } from "./components/SharedNavState";
import { CartContextProvider } from "./components/CartContext";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <Router>
      <main className="font-custom">
        {/* UI spinner on fetching */}
        <Suspense fallback={<Loader />}>
          <SharedNavStateProvider>
            <CartContextProvider>
              <Nav />
              <MobileNav />
              <CancelShade />
              <Cart />
              <CancelCart />
              <Checkout />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/shop" element={<Shop />} />
                <Route
                  path="/product/:colName/:id"
                  element={<ProductDetails />}
                />
              </Routes>
            </CartContextProvider>
          </SharedNavStateProvider>

          <Footer />
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
