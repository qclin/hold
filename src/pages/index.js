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
  const tagOn = tagFilter.length != 0;
  const selectedProjects = tagOn
    ? projects.filter(project => project.tags.includes(tagFilter))
    : projects;
  const relatedTags = tagOn
    ? selectedProjects.flatMap(project => project.tags)
    : [];

  const blurContext = aboutOn || contactOn;
  return (
    <div>
      <div className={blurContext ? 'blur' : ''}>
        <TagPanel
          tagOn={tagOn}
          tagFilter={tagFilter}
          handleTagSelection={setTagFilter}
          relatedTags={relatedTags}
        />
      </div>
      {blurContext && <div className="w-100 h-100 fixed">block</div>}
      <div className="fl w-75">
        {tagOn ? (
          <span className="close" onClick={() => setTagFilter('')}>
            clear
          </span>
        ) : (
          <AboutUs
            type={aboutOn ? 'open' : 'scroll'}
            handleAboutToggle={setAboutOn}
            showNav={scroll.y > 150}
          />
        )}
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
            {selectedProjects.map((project, index) => (
              <ProjectPreview model={project} key={project.id} index={index} />
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
