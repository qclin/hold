import React, { useState } from 'react';
import { useRouteData } from 'react-static';
import { useSpring, animated, config } from 'react-spring';
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
  const [tagFilter, setTagFilter] = useState('');

  const showNav = scroll.y > 150 ? 'show' : 'hide';
  const showContact = scroll.reachedBottom ? 'show' : 'hide';
  const blurContext = aboutOn || contactOn;
  return (
    <div>
      <div className={blurContext ? 'blur' : ''}>
        <TagPanel handleTagSelection={setTagFilter} />
      </div>
      <div className="fl w-75">
        <AboutUs type={aboutOn ? 'open' : 'scroll'} />
        <nav onClick={() => setAboutOn(!aboutOn)} className={showNav}>
          <span>ABOUT</span>
        </nav>

        {tagFilter}
        <div className={blurContext ? 'blur home-body' : 'home-body'}>
          <div id="project-section">
            {projects.map((project, index) => (
              <ProjectPreview model={project} key={project.id} index={index} />
            ))}
          </div>
        </div>
        <footer
          onClick={() => setContactOn(!contactOn)}
          className={showContact}
        >
          <span>CONTACT</span>
        </footer>
        {contactOn && <Contact />}
      </div>
    </div>
  );
};
