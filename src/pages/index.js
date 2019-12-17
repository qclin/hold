import React, { useState } from 'react';
import { useRouteData } from 'react-static';
import { useScroll } from '../utils/use-scroll';
import AboutUs from '../components/layout/AboutUs';
import Contact from '../components/layout/Contact';
import TagPanel from '../components/tags/TagPanel';
import ProjectPreview from '../components/project/ProjectPreview';

export default () => {
  const { projects } = useRouteData();
  const scroll = useScroll();

  const [aboutOn, setAboutOn] = useState(false);
  const [contactOn, setContactOn] = useState(false);

  const blurContext = aboutOn || contactOn;
  const showFrame = scroll.y > 439;
  return (
    <div className={aboutOn ? 'main modal-open' : 'main'}>
      <AboutUs
        type={aboutOn ? 'open' : 'scroll'}
        handleAboutToggle={setAboutOn}
        showNav={showFrame}
      />
      <div
        id="page-body"
        className={blurContext ? 'blur' : ''}
        onClick={() => {
          if (blurContext) {
            setAboutOn(false);
            setContactOn(false);
          }
        }}
      ></div>
      <div className={blurContext ? 'blur-content fl w-100' : 'fl w-100'}>
        <div id="project-section">
          {projects.map((project, index) => (
            <ProjectPreview model={project} key={project.id} index={index} />
          ))}
        </div>
      </div>
      <Contact
        contactOn={contactOn}
        showFooter={showFrame}
        handleContactToggle={setContactOn}
      />
    </div>
  );
};
