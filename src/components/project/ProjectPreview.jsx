import React, { useState } from 'react';
import { useRouteData } from 'react-static';
import ReactTooltip from 'react-tooltip';
import debounce from 'lodash/debounce';
import ImageCarousel from './ImageCarousel';
import useWindowSize from '../../utils/use-window';

export default function ProjectPreview({ model, index }) {
  const isEven = index % 2 == 0;
  const { isDesktop } = useWindowSize();
  const [showText, setShowText] = useState(false);

  const { tags } = useRouteData();
  const projectTags = model.tags.map(id => tags.find(tag => tag.id == id));
  return (
    <div className="project-preview">
      {(isEven || !isDesktop) && [
        <ImageCarousel
          images={model.images}
          onLeft={isEven}
          expanded={showText}
        />
      ]}
      <div
        className={isEven ? 'even text-box-wrapper' : 'odd text-box-wrapper'}
      >
        <div
          className="text-box"
          onClick={() => {
            setShowText(!showText);
          }}
        >
          <h3 className="ma0 project-title">{model.name}</h3>
          <p
            className={
              showText ? 'expand project-description' : 'project-description'
            }
          >
            {model.brief}
          </p>
          <div className="my1 number time-stamp">✺ {model.date}</div>
          <p
            className={
              showText ? 'expand project-tag-wrapper' : 'project-tag-wrapper'
            }
          >
            <hr />
            <div className="tag-wrapper">
              {projectTags.map(tag => (
                <span className={`${tag.type} project-tags`}>{tag.name}</span>
              ))}
            </div>
          </p>
          <span className="expand-arrow mobile">
            {!showText ? (
              <img src="/icons/txt-expand.svg" />
            ) : (
              <img src="/icons/txt-collapse.svg" />
            )}
          </span>
        </div>
      </div>
      {!isEven && isDesktop && (
        <ImageCarousel images={model.images} expanded={showText} />
      )}
    </div>
  );
}
