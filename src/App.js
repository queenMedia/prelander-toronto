import { Header } from "./sections/header/header";
import { Footer } from "./sections/footer/footer";
import { Content } from "./sections/content/content";
import "./App.css";
import "./App.responsive.css";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;

