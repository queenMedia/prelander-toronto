import React, { Suspense, lazy } from 'react';
import { FirstContent } from "../../components/firstContent/firstContent";
// import { Comments } from "../comments/comments";
import "./mainContent.css";
import "./mainContent.responsive.css";

const Comments = lazy(() => import('../comments/comments'));

export const MainContent = () => {
  return (
    <section className="main_content">
      <FirstContent />
      <Suspense fallback={<div>loading...</div>}>
        <Comments />
      </Suspense>
    </section>
  );
};
