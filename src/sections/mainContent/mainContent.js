import { FirstContent } from "../../components/firstContent/firstContent";
import { Comments } from "../comments/comments";
import "./mainContent.css";
import "./mainContent.responsive.css";

export const MainContent = () => {
  return (
    <section className="main_content">
      <FirstContent />
      <Comments />
    </section>
  );
};
