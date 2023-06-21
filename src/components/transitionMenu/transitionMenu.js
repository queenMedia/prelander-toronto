import React, { useState, useEffect } from 'react';
import { TelegramRedirect } from "../telegramRedirect/telegramRedirect";
import "./transitionMenu.css";
import "./transitionMenu.responsive.css";
const TransitionMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuItems =[
    "Slovenija",
    "Črna kronika",
    "Tujina",
    "Gospodarstvo",
    "Znanost in tehnologija",
    "Preverjeno",
    "Fokus",
    "Inšpektor",
    "Svet",
  ]
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = scrollTop === 0; // Aquí debes ajustar el valor de "0" según la posición en la que quieras que aparezca el elemento
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="transition_menu" style={(isVisible ? {top: "72px"} : null)}>
      <ul className="transition_menu_list">
        {
          menuItems.map((item, index) =>(
            <li className={`transition_menu_list_item ${(index === 0 ? "transition_menu_list_item_selected" : "")}`}>
              <TelegramRedirect className="transition_menu_list_item_link">
                {item}
              </TelegramRedirect>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export {TransitionMenu};
