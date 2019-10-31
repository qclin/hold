import React from "react";
import { useRouteData } from "react-static";
import { Link } from "components/Router";

export default function Project() {
  const { project } = useRouteData();

  return (
    <div className="project-page">
      <Link to="/"> back </Link>
      <br />
      <h3>{project.name}</h3>
      <p>{project.date}</p>
      <div className="fl w-30 pa2 mr5 bt b--silver">
        <p className="measure">{project.description}</p>
      </div>
      <div className="fl w-40 pa2">
        {project.images.map(ea => (
          <img src={"/images/placeholder/" + ea} />
        ))}
      </div>
    </div>
  );
}
