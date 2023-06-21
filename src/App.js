import { Header } from "./sections/header/header";
import { Content } from "./sections/content/content";
import { Footer } from "./sections/footer/footer";
import { StickyFooter } from "./components/stickyFooter/stickyFooter";
import Popup from "./components/popup/popup";
import MiniModal from "./components/miniModal/miniModal";
import {useScrollProgressBar} from './hook/useScrollProgressBar';
import { TransitionMenu } from "./components/transitionMenu/transitionMenu";
import "./App.css";
import "./App.responsive.css";

function App() {
  const scrollProgress = useScrollProgressBar();
  return (
    <>
    <TransitionMenu />
      <div className="progress_bar">
        <div className="progress_bar_fill" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      <Header />
      <div className="App">
        
        <Content />
      </div>
      <Popup />
    </>
  );
}

export default App;

