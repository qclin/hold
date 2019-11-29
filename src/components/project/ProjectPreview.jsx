import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import debounce from 'lodash/debounce';

export default function ProjectPreview({
  model,
  index,
  handleSetFocus,
  focus
}) {
  // TODO: update this later
  const tmpImage = model.images[0];
  const [placeholder, setPlaceholder] = useState(false);

  const styles = 'fl w-30 pa3 text-box';
  return (
    <div
      className={
        focus == index
          ? 'focus project-preview items-top'
          : 'project-preview items-top'
      }
      onMouseEnter={e => {
        e.stopPropagation();
        handleSetFocus(index);
      }}
    >
      <div className={placeholder ? styles + ' coming-soon' : styles}>
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
          <img src="/images/Copy.svg" />
        </span>
      </div>
      <div className="w-70 image-wrapper fr">
        <div
          className="teal-overlay"
          data-tip={tmpImage.name}
          data-for={`imagePreview${model.id}`}
        ></div>
        <ReactTooltip
          place="right"
          type="light"
          effect="float"
          id={`imagePreview${model.id}`}
        >
          {tmpImage.name}
        </ReactTooltip>
        <img className="w-100" src={tmpImage.path} alt={tmpImage.name} />
      </div>
    </div>
  );
}
