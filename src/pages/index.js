import React from 'react';
import { useRouteData } from 'react-static';

import { useSpring, animated, config } from 'react-spring';
import AboutUs from '../components/layout/AboutUs';
import Contact from '../components/layout/Contact';
import ProjectPreview from '../components/project/ProjectPreview';

export default () => {
  const { projects } = useRouteData();

  const props = useSpring({
    height: 200,
    from: { height: 70 },
    config: { mass: 50, tension: 10, friction: 25 }
  });

  function logScrollY() {}

  return (
    <div className="fl w-75">
      <animated.div
        style={props}
        className="about-wrapper"
        onScroll={() => console.log(window.scrollY)}
      >
        <AboutUs />
      </animated.div>
      <div className="home-body">
        <div id="project-section">
          {projects.map((project, index) => (
            <ProjectPreview model={project} key={project.id} index={index} />
          ))}
        </div>
        <Contact />
      </div>
    </div>
  );
};
