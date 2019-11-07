import React, { useState } from "react";

export default function AboutUs(props) {
  const { type } = props;

  return (
    <div id="about-us" className={props.type}>
      <div className="content">
        <div className="background"></div>
        <div className="measure-wide bg-white">
          <p>
            Hold designs creative support systems for political and social
            practices for durable collectivities
          </p>
          <p>
            With the desire to support
            <span
              className="annotations"
              onMouseEnter={() => console.log("show popover")}
            >
              1
            </span>
            comes the speculation on what systems can create it. By support we
            mean generating visibility to what has been overlooked in a system.
            We think of dominant lineages of knowledge production
            <span className="annotations">2</span> and its impact on what has
            become prevalent. We engage with existing structures directly, study
            their context and conditions in order to understand its strengths,
            uneven differences and need to foreground undermined information. To
            creatively experiment with reconfiguration
            <span className="annotations">3</span> is to practice cultivating
            ‘support systems,’ to breed collaborative dialogues that enable
            multiplicities of organizing, structuring and designing. Our work
            acknowledges the current to strategize and implement about what
            comes next.
          </p>

          <p>
            As a design and technology studio we frame our methodology via
            collaboration. We’re motivated to utilize creative technology as a
            tool to empower political and social practices that work towards
            fostering collective care and durable futures. We work with
            individuals, alliances and institutions who either are in need of
            cultural visibility, alternative organizational structures or are
            actively engaging with innovative forms of knowledge production.
            Hold is available for design and consultancy for research,
            organizational coordination, website identities, platform interfaces
            and digital strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
