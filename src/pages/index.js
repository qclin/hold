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

  const blurContext = contactOn;
  const showFrame = scroll.y > 439;
  return (
    <div className={aboutOn ? 'main modal-open' : 'main'}>
      <AboutUs
        type={aboutOn ? 'open' : 'scroll'}
        isVisible={aboutOn}
        handleAboutToggle={setAboutOn}
        showNav={showFrame}
      />

      <div
        id="page-body"
        className={blurContext ? 'blur' : ''}
        onClick={() => {
          setContactOn(false);
        }}
      ></div>

      <div id="project-section" className={blurContext ? 'blur-content' : ''}>
        {projects.map((project, index) => (
          <ProjectPreview model={project} key={project.id} index={index} />
        ))}
      </div>

      <Contact
        contactOn={contactOn}
        showFooter={showFrame}
        handleContactToggle={setContactOn}
      />
    </div>
  );
};
