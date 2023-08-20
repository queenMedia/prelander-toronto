import React, { useEffect } from 'react';
import { Header } from "./sections/header/header";
import { Footer } from "./sections/footer/footer";
import { Content } from "./sections/content/content";
import Popup from "./components/popup/popup.js";
import  {handleRoute} from "./config"
import "./App.css";
import "./App.responsive.css";

function App() {
  useEffect(() => {
    const handleLinkClick = (event) => {
      const linkTitle = event.currentTarget.getAttribute('title');
      handleRoute(linkTitle);
    };

    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);
  return (
    <>
      <Header />
      <div className="App">
        <Content />
      </div>
      <Footer />
      {/* <Popup /> */}
    </>
  );
}

export default App;

