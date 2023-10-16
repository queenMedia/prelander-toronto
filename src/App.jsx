import React, { useEffect, Suspense, lazy } from 'react';
import { Header } from "./sections/header/header";
import { Content } from "./sections/content/content";
import Popup from "./components/popup/popup.js";
import  {handleRoute} from "./config"
import "./App.css";
import "./App.responsive.css";
import useScrollPercentage from './hook/useScrollPercentage';
const Footer = lazy(() => import('./sections/footer/footer'));

function App() {
  const scrollPercentage = useScrollPercentage();
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
      <div className="header_on_scroll">
        <Header />
      </div>
      <Header />
      <div className="App">
        <Content />
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Footer />
      </Suspense>
      <Popup />
    </>
  );
}

export default App;

