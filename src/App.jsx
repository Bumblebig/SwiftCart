import { Nav, Footer } from "./components";
import { Home, About, Contact, Login } from "./pages";

function App() {
  return (
    <main className="font-custom">
      <Nav />
      <Home />
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Login /> */}
      <Footer />
    </main>
  );
}

export default App;
