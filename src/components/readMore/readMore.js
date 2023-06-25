import "./readMore.css";
import { useState } from "react" 

export const ReadMore = (props) => {
  const [buttonClass, setButtonClass] = useState("readMore-container");
  return (
    <>
        <button className={buttonClass} onClick={() =>{
            setButtonClass("readMore-none-display"); 
            props.onClick(true);
          }}>
          Leia o artigo completo
        </button>
    </>
  );
};
