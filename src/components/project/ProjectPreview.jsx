import React, { useState } from 'react';
import { useRouteData } from 'react-static';
import ReactTooltip from 'react-tooltip';
import debounce from 'lodash/debounce';
import ImageCarousel from './ImageCarousel';
import useWindowSize from '../../utils/use-window';

export default function ProjectPreview({
  model,
  index,
  handleSetFocus,
  focus
}) {
  const isEven = index % 2 == 0;
  const { isDesktop } = useWindowSize();
  const [showText, setShowText] = useState(false);

  const { tags } = useRouteData();
  const projectTags = model.tags.map(id => tags.find(tag => tag.id == id));
  return (
    <div
      className={
        focus == index
          ? 'focus project-preview items-top mb3'
          : 'project-preview items-top mb3'
      }
      onMouseEnter={e => {
        e.stopPropagation();
        handleSetFocus(index);
      }}
    >
      {(isEven || !isDesktop) && [
        <div className="w-10"></div>,
        <ImageCarousel images={model.images} onLeft={isEven} />
      ]}
      <div className="w-100 w-30-ns text-box-wrapper">
        <div className={isEven ? 'even text-box' : 'odd text-box'}>
          <h3 className="ma0 project-title">{model.name}</h3>
          <p
            className={
              showText
                ? 'show ma0 measure b--silver'
                : 'project-description ma0 measure b--silver'
            }
          >
            {model.brief}
            <div className="my1 number time-stamp">✺ {model.date}</div>
            <hr />
            <div className="tag-wrapper">
              {projectTags.map(tag => (
                <span className={`${tag.type} project-tags`}>{tag.name}</span>
              ))}
            </div>
          </p>
          <span
            className="expand-arrow mobile"
            onClick={() => {
              setShowText(true);
            }}
          >
            {!showText && <img src="/icons/expand.svg" />}
          </span>
        </div>
      </div>
      {!isEven && isDesktop && <ImageCarousel images={model.images} />}
    </div>
  );
}
