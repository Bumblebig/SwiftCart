import {
  Nav,
  MobileNav,
  Footer,
  CancelShade,
  Cart,
  CancelCart,
} from "./components";
import { Home, About, Contact, Login } from "./pages";
import { SharedNavStateProvider } from "./components/SharedNavState";
import { CartContextProvider } from "./components/CartContext";

function App() {
  return (
    <main className="font-custom">
      <SharedNavStateProvider>
        <CartContextProvider>
          <Nav />
          <MobileNav />
          <CancelShade />
          <Cart />
          <CancelCart />
        </CartContextProvider>
      </SharedNavStateProvider>
      <Home />
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Login /> */}
      <Footer />
    </main>
  );
}

export default App;
