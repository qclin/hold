import React, { useState, useRef } from 'react';
import { useRouteData } from 'react-static';
import Annotation, { renderImage, renderMark } from './Annotation';

export default function AboutUs(props) {
  const { footnotes } = useRouteData();
  const { type, isVisible, handleAboutToggle, showNav } = props;
  const isScroll = type == 'scroll';
  const aboutRef = useRef(null);

  return (
    <>
      <nav
        onClick={() => {
          if (isVisible) {
            aboutRef.current.scrollTo(0, 0);
          }
          handleAboutToggle(!isVisible);
        }}
        id="hold"
        className={showNav ? 'show' : 'hide'}
      >
        <span className="label">STUDIO HOLD</span>
      </nav>
      <div id="about" className={type}>
        <div className="content" ref={aboutRef}>
          <div className="w-100 w-75-ns measure-wide">
            <span id="holder"></span>
            <p>
              Hold
              <Annotation id={1} key={1} footnote={footnotes[0]} isMark />{' '}
              develops support systems for political and social practices
              engaged in durable futures.
            </p>

            <p>
              As a design studio we frame our methodology through close dialogue
              with our clients.
              <Annotation id={2} key={2} footnote={footnotes[1]} isMark /> We
              work with individuals, alliances and institutions who either are
              in need of visibility, alternative organizational structures or
              engaged in their own practice. Hold is available for design and
              consultancy for research, organizational coordination, website
              identities, platform interfaces and digital strategies.
            </p>

            <p class="part-2">
              With the desire to support
              <Annotation id={3} key={3} footnote={footnotes[2]} isMark /> comes
              the speculation on what systems can create it. We engage with
              existing structures, study their context and conditions in order
              to understand its strengths, uneven differences and need to
              foreground undermined information
              <Annotation id={4} key={4} footnote={footnotes[3]} isMark />. By
              experimenting with reconfiguration
              <Annotation id={5} key={5} footnote={footnotes[4]} isMark /> we
              nurture dialogues that enable multiple ways of organizing,
              structuring and designing.
            </p>
            <div class="mobile footnotes">
              {footnotes.map((note, index) => (
                <div id={`footnote-${note.id}`}>
                  <span className="bg-pale pa1 label">{note.id}</span>
                  {renderMark(note.text)}
                  {note.images && note.images.map(img => renderImage(img))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <span
          id="openAbout"
          className="absolute"
          onClick={() => handleAboutToggle(isScroll)}
        >
          <div id="about-toggle-icon" className={isScroll ? '' : 'collapse'}>
            <img src="./icons/expand-no-fill.svg" />
          </div>
        </span>
      </div>
    </>
  );
}
