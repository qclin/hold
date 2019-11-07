import React, { useState } from "react";
import { useRouteData } from "react-static";
import { useSpring, animated, config } from "react-spring";
import { useScroll } from "../utils/use-scroll";
import AboutUs from "../components/layout/AboutUs";
import Contact from "../components/layout/Contact";
import TagPanel from "../components/tags/TagPanel";
import ProjectPreview from "../components/project/ProjectPreview";

export default () => {
  const { projects } = useRouteData();
  const scroll = useScroll();

  const [expanded, setExpanded] = useState(false);
  const showNav = scroll.y > 180 ? "show" : "hide";
  return (
    <div>
      <TagPanel className={expanded ? "blur" : ""} />
      <div className="fl w-75">
        <AboutUs type={expanded ? "open" : "scroll"} />
        <nav onClick={() => setExpanded(!expanded)} className={showNav}>
          <span>ABOUT</span>
        </nav>
        <div className={expanded ? "blur home-body" : "home-body"}>
          <div id="project-section">
            {projects.map((project, index) => (
              <ProjectPreview model={project} key={project.id} index={index} />
            ))}
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};
