import React, { useState } from 'react';
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
  const [placeholder, setPlaceholder] = useState(false);
  const isEven = index % 2 == 0;
  const { isDesktop } = useWindowSize();
  const textBoxStyles = 'w-100 w-30-ns text-box-wrapper';
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
      {(isEven || !isDesktop) && <ImageCarousel images={model.images} />}
      <div
        className={placeholder ? textBoxStyles + ' coming-soon' : textBoxStyles}
      >
        <div className={isEven ? 'even text-box pa3 ' : 'odd text-box  pa3 '}>
          <h3 className="ma0">{model.name}</h3>
          <span className="ma0">{model.date}</span>
          {placeholder && <div className="overlay">coming soon</div>}

          <p className="measure bt b--silver">
            {model.blurb.substring(0, 480)}...
          </p>
          <span
            className="expand-arrow"
            onClick={() => {
              setPlaceholder(true);
              setTimeout(() => {
                setPlaceholder(false);
              }, 2000);
            }}
          >
            <img src="/icons/expand.svg" />
          </span>
        </div>
      </div>
      {!isEven && isDesktop && <ImageCarousel images={model.images} />}
    </div>
  );
}
