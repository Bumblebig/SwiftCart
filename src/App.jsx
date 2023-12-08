import { Nav, Footer } from "./components";
import { Home, About, Contact } from "./pages";

function App() {
  return (
    <main className="font-custom">
      <Nav />
      {/* <Home /> */}
      {/* <About /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
