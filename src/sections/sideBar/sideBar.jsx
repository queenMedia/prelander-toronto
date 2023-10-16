import React, { Suspense, lazy } from 'react';
import { Testimonials } from "../../components/testimonials/testimonials";
import "./sideBar.css";
import "./sideBar.responsive.css";
const Steps = lazy(() => import('../steps/steps'));

export const SideBar = () => {
  return (
    <section className="side_bar">
        <Testimonials />
        <Suspense fallback={<div>loading...</div>}>
          <Steps />
        </Suspense>
    </section>
  );
};
