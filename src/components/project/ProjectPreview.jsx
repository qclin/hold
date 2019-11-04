import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from 'components/Router';

export default function ProjectPreview({ model, index }) {
  // TODO: update this later
  const tmpImage = model.images[index];
  const nthOf = index % 2 == 0 ? 'even' : 'odd';
  return (
    <div className="project-preview items-top">
      <Link
        to={`/projects/${model.id}/`}
        className={`fl w-40 pa3 grow text-box ${nthOf}`}
      >
        <h3 className="ma0">{model.name}</h3>
        <p className="ma0">{model.date}</p>
        <p className="measure bt b--silver">{model.blurb}</p>
      </Link>
      <div className="w-60 grow image-wrapper">
        <div className="teal-overlay"></div>
        <img src={tmpImage.path} alt={tmpImage.name} />
      </div>
    </div>
  );
}
