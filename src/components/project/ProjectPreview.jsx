import React, { useState } from 'react';
import { useRouteData } from 'react-static';
import ReactTooltip from 'react-tooltip';
import debounce from 'lodash/debounce';
import ImageCarousel from './ImageCarousel';
import useWindowSize from '../../utils/use-window';

export default function ProjectPreview({ model, index }) {
  const isEven = index % 2 == 0;
  const { isDesktop } = useWindowSize();

  const { tags } = useRouteData();
  const projectTags = model.tags.map(id => tags.find(tag => tag.id == id));
  return (
    <div className="project-preview">
      {(isEven || !isDesktop) && [
        <ImageCarousel images={model.images} onLeft={isEven} />
      ]}
      <div
        className={isEven ? 'even text-box-wrapper' : 'odd text-box-wrapper'}
      >
        <div className="text-box">
          <h3 className="ma0 project-title">{model.name}</h3>
          <p className="expand project-description">{model.brief}</p>
          <div className="my1 number time-stamp">✺ {model.date}</div>
          <p className="expand project-tag-wrapper">
            <hr />
            <div className="tag-wrapper">
              {projectTags.map(tag => (
                <span className={`${tag.type} project-tags`}>{tag.name}</span>
              ))}
            </div>
          </p>
        </div>
      </div>
      {!isEven && isDesktop && <ImageCarousel images={model.images} />}
    </div>
  );
}
