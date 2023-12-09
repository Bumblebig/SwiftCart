import { Nav, MobileNav, Footer, CancelShade } from "./components";
import { Home, About, Contact, Login } from "./pages";
import { SharedNavStateProvider } from "./components/SharedNavState";

function App() {
  return (
    <main className="font-custom">
      <SharedNavStateProvider>
        <Nav />
        <MobileNav />
        <CancelShade />
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
