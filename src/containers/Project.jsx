import React from "react";
import { useRouteData } from "react-static";
import { Link } from "components/Router";

import { findImagePath } from "../utils/find-image-path";

export default function Project() {
  const { project } = useRouteData();
  const { details, blurb, name, date, images } = project;

  return (
    <div className="project-page">
      <Link to="/"> back </Link>
      <br />
      <h3>{name}</h3>
      <p>{date}</p>
      <div className="fl w-60 pa2 mr5 bt b--silver"></div>
      <div className="bt b--silver">
        {details.sections &&
          details.sections.map(ea => (
            <section className="fl pa2 mr5">
              <div className="title"> {ea.title} </div>
              <p className="measure"> {ea.description} </p>
              {ea.imageTag && <img src={findImagePath(ea.imageTag, images)} />}
              {ea.subSections &&
                ea.subSections.map(sub => (
                  <div>
                    <div className="title measure-narrow fl"> {sub.text} </div>
                    {sub.imageTag && (
                      <div className="fl w-70 pa2">
                        <img src={findImagePath(sub.imageTag, images)} />
                      </div>
                    )}
                  </div>
                ))}
            </section>
          ))}
      </div>
      {!details.sections && (
        <div className="fl w-40 pa2">
          {images.map(ea => (
            <img src={ea.path} alt={ea.name} />
          ))}
        </div>
      )}
    </div>
  );
}
