import { Nav, MobileNav, Footer, CancelShade } from "./components";
import { Home, About, Contact, Login } from "./pages";
import { SharedStateProvider } from "./components/SharedNavState";

function App() {
  return (
    <main className="font-custom">
      <SharedStateProvider>
        <Nav />
        <MobileNav />
        <CancelShade />
      </SharedStateProvider>
      <Home />
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Login /> */}
      <Footer />
    </main>
  );
}

export default App;
