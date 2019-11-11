import React from 'react';
import { Link } from 'components/Router';
import ReactTooltip from 'react-tooltip';

export default function ProjectPreview({ model, index }) {
  // TODO: update this later
  const tmpImage = model.images[0];
  const nthOf = index % 2 == 0 ? 'even' : 'odd';

  return (
    <div className="project-preview items-top">
      <Link
        to={`/projects/${model.id}/`}
        className={`fl w-40 pa3 text-box ${nthOf}`}
      >
        <h3 className="ma0">{model.name}</h3>
        <span className="ma0">{model.date}</span>
        <p className="measure bt b--silver">{model.blurb}</p>
      </Link>
      <div className="w-60 image-wrapper fr">
        <div className="teal-overlay" data-tip={tmpImage.name} data-for={`imagePreview${model.id}`}></div>
        <ReactTooltip place="right" type="light" effect="float" id={`imagePreview${model.id}`}> {tmpImage.name}</ReactTooltip>
        <img src={tmpImage.path} alt={tmpImage.name}/>
      </div>
    </div>
  );
}
