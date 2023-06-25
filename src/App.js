import { Header } from "./sections/header/header";
import { Footer } from "./sections/footer/footer";
import { Content } from "./sections/content/content";
import "./App.css";
import "./App.responsive.css";

function App(props) {
  return (
    <>
      <Header />
      <div className="App">
        <Content config={props.config} />
      </div>
      <Footer />
    </>
  );
}

export default App;
