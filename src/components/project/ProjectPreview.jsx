import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

export default function ProjectPreview({ model, index }) {
  // TODO: update this later
  const tmpImage = model.images[0];
  const nthOf = index % 2 == 0 ? 'even' : 'odd';
  const [placeholder, setPlaceholder] = useState(false);
  const styles = `fl w-40 pa3 text-box ${nthOf}`;
  return (
    <div className="project-preview items-top">
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
      <div className="w-60 image-wrapper fr">
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
        <img src={tmpImage.path} alt={tmpImage.name} />
      </div>
    </div>
  );
}
