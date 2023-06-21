import { useState } from "react";
import { FirstContent } from "../../components/firstContent/firstContent";
import { SecondContent } from "../../components/secondContent/secondContent";
import { Comments } from "../comments/comments";
import "./mainContent.css";
import "./mainContent.responsive.css";

export const MainContent = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="main_content">
      <FirstContent oppenReadMore={setReadMore} />
      {readMore && <SecondContent />}
      <Comments />
    </section>
  );
};
