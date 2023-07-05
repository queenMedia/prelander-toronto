import { ITALIC_INDICATOR, LINK_INDICATOR } from "../../config";
import "./customContent.css";
import parse from 'html-react-parser';

export const CustomContent = (props) => {
  const stylesCustom = {
    ...(props.size ? {fontSize: props.size} : null),
    ...(props.fontFamily ? {fontFamily: props.fontFamily} : null),
    ...(props.fontStyle ? {fontStyle: props.fontStyle} : null),
    ...(props.position ? {textAlign: props.position} : null),
  }

  return (
    <p className="text_custom" style={stylesCustom}>
      {parse(props.text)}
    </p>
  );
};
