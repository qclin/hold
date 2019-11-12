import React, { useState } from 'react';
import { useRouteData } from 'react-static';
import Annotation from './Annotation';

export default function AboutUs(props) {
  const { footnotes } = useRouteData();
  const { type, handleAboutToggle, showNav } = props;
  const [keepReading, setKeepReading] = useState(false);
  const isScroll = type == 'scroll';
  return (
    <>
      <nav
        onClick={() => handleAboutToggle(true)}
        className={showNav ? 'show' : 'hide'}
      >
        <span>ABOUT</span>
      </nav>
      <div
        id="about"
        className={type}
        onMouseEnter={() => {
          isScroll && setKeepReading(true);
        }}
        onMouseLeave={() => {
          isScroll && setKeepReading(false);
        }}
      >
        {keepReading && (
          <div
            class="overlay"
            onClick={() => {
              handleAboutToggle(true);
              setKeepReading(false);
            }}
          >
            Keep Reading
          </div>
        )}
        <div className={keepReading ? 'keep-reading content' : 'content'}>
          <div className="measure-wide">
            <p>
              Hold
              <Annotation id={1} footnote={footnotes[0]} />
              designs creative support systems for political and social
              practices for durable collectivities
            </p>
            <p>
              With the desire to <span class="underline">support</span>
              <Annotation id={2} footnote={footnotes[1]} isMark />
              comes the speculation on what systems can create it. By support we
              mean generating visibility to what has been overlooked in a
              system. We think of dominant lineages of{' '}
              <span class="underline">knowledge production</span>
              <Annotation id={3} footnote={footnotes[2]} isMark wide />
              and its impact on what has become{' '}
              <span class="underline">prevalent</span>
              <Annotation id={4} footnote={footnotes[3]} isMark />. We engage
              with existing structures directly, study their context and
              conditions in order to understand its strengths, uneven
              differences and need to foreground undermined information. To
              creatively experiment with{' '}
              <span class="underline">reconfiguration</span>
              <Annotation id={5} footnote={footnotes[4]} />
              is to practice cultivating ‘support systems,’ to breed
              collaborative dialogues that enable{' '}
              <span class="underline">multiplicities of</span>
              <Annotation id={6} footnote={footnotes[5]} isMark />
              organizing, structuring and designing. Our work acknowledges the{' '}
              <i>current</i> to strategize and implement about what comes{' '}
              <i>next</i>.
            </p>

            <p>
              As a design and technology studio we frame our methodology via{' '}
              <span class="underline">collaboration</span>
              <Annotation id={7} footnote={footnotes[6]} isMark />. We’re
              motivated to utilize creative technology as a tool to empower
              political and social practices that work towards fostering
              collective care and durable futures. We work with individuals,
              alliances and institutions who either are in need of cultural
              visibility, alternative organizational structures or are actively
              engaging with innovative forms of knowledge production. Hold is
              available for design and consultancy for research, organizational
              coordination, website identities, platform interfaces and digital
              strategies.
            </p>
          </div>
          {type != 'scroll' && (
            <div className="close" onClick={() => handleAboutToggle(false)}>
              CLOSE
            </div>
          )}
        </div>
      </div>
    </>
  );
}
