import { Nav, Footer } from "./components";
import { Home, About } from "./pages";

function App() {
  return (
    <main className="font-custom">
      <Nav />
      {/* <Home /> */}
      <About />
      <Footer />
    </main>
  );
}

export default App;
