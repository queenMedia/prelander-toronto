import { Testimonials } from "../../components/testimonials/testimonials";
import { Steps } from "../steps/steps";
import "./sideBar.css";
import "./sideBar.responsive.css";

export const SideBar = ({config}) => {
  return (
    <section className="side_bar">
        <Testimonials config={config} />
        <Steps config={config}/>
    </section>
  );
};
