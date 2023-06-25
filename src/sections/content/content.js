import { MainContent } from "../mainContent/mainContent";
import { SideBar } from "../sideBar/sideBar";

import "./content.css";
import "./content.responsive.css";

export const Content = (props) => {
  return (
    <main className="content">
      <MainContent config={props.config} />
      <SideBar config={props.config} />
    </main>
  );
};
