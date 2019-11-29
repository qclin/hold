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
  const [focus, setFocus] = useState(null);
  const tagOn = tagFilter.length != 0;
  const selectedProjects = tagOn
    ? projects.filter(project => project.tags.includes(tagFilter))
    : projects;
  const relatedTags = tagOn
    ? selectedProjects.flatMap(project => project.tags)
    : [];

  const hoverTags = projects[focus] ? projects[focus].tags : [];

  const blurContext = aboutOn || contactOn;
  return (
    <div>

      {blurContext && <div className="w-100 h-100 fixed"></div>}
      {tagOn ? (
        <span className="close fixed" onClick={() => setTagFilter('')}>
          clear
        </span>
      ) : (
        <AboutUs
          type={aboutOn ? 'open' : 'scroll'}
          handleAboutToggle={setAboutOn}
          showNav={scroll.y > 150}
        />
      )}
      <div className={blurContext ? 'blur' : ''}>

        <TagPanel
          fixed={scroll.y > 400}
          tagOn={tagOn}
          tagFilter={tagFilter}
          handleTagSelection={setTagFilter}
          relatedTags={relatedTags}
          hoverTags={hoverTags}
        />
      </div>
      <div className="fl w-80">

        <div
          className={blurContext ? 'blur home-body' : 'home-body'}
          onClick={() => {
            if (blurContext) {
              setContactOn(false);
              setAboutOn(false);
            }
          }}
        >
          <div id="project-section">
            <div className="title">PROJECTS</div>
            {selectedProjects.map((project, index) => (
              <ProjectPreview
                model={project}
                key={project.id}
                index={index}
                focus={focus}
                handleSetFocus={setFocus}
              />
            ))}
          </div>
        </div>

        <Contact
          contactOn={contactOn}
          showFooter={scroll.reachedBottom}
          handleContactToggle={setContactOn}
        />
      </div>
    </div>
  );
};
