import React, { useState } from 'react';
import { useRouteData } from 'react-static';
import ReactTooltip from 'react-tooltip';
import marked from 'marked';

export default function AboutUs(props) {
  const { footnotes } = useRouteData();
  const { type, handleAboutToggle, showNav } = props;
  const [keepReading, setKeepReading] = useState(false);
  const isScroll = type == 'scroll';
  const tmp = footnotes[2].text;
  const renderer = new marked.Renderer();

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
              <span className="superscript" data-tip data-for="note-1">
                1
              </span>
              <ReactTooltip
                id="note-1"
                type="light"
                place="bottom"
                effect="solid"
                delayHide={500}
                className="annotations"
              >
                {footnotes[0].text}
              </ReactTooltip>
              designs creative support systems for political and social
              practices for durable collectivities
            </p>
            <p>
              With the desire to <span class="underline">support</span>
              <span className="superscript" data-tip data-for="note-2">
                2
              </span>
              <ReactTooltip
                id="note-2"
                type="light"
                place="bottom"
                effect="solid"
                delayHide={500}
                className="annotations"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(footnotes[1].text, { renderer })
                  }}
                />
                <img src={footnotes[1].images[0]} />
                <object
                  data={footnotes[1].images[1]}
                  type="application/pdf"
                  width="200"
                  height="200"
                />
              </ReactTooltip>
              comes the speculation on what systems can create it. By support we
              mean generating visibility to what has been overlooked in a
              system. We think of dominant lineages of{' '}
              <span class="underline">knowledge production</span>
              <span className="superscript" data-tip data-for="note-3">
                3
              </span>
              <ReactTooltip
                id="note-3"
                type="light"
                place="bottom"
                effect="solid"
                delayHide={500}
                className="annotations"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(footnotes[2].text, { renderer })
                  }}
                />
              </ReactTooltip>
              and its impact on what has become{' '}
              <span class="underline">prevalent</span>
              <span className="superscript" data-tip data-for="note-4">
                4
              </span>
              <ReactTooltip
                id="note-4"
                type="light"
                place="bottom"
                effect="solid"
                delayHide={500}
                className="annotations"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(footnotes[3].text, { renderer })
                  }}
                />
              </ReactTooltip>
              . We engage with existing structures directly, study their context
              and conditions in order to understand its strengths, uneven
              differences and need to foreground undermined information. To
              creatively experiment with{' '}
              <span class="underline">reconfiguration</span>
              <span className="superscript" data-tip data-for="note-5">
                5
              </span>
              <ReactTooltip
                id="note-5"
                type="light"
                place="bottom"
                effect="solid"
                delayHide={500}
                className="annotations"
              >
                {footnotes[4].text}
                <img src={footnotes[4].images[0]} />
              </ReactTooltip>
              is to practice cultivating ‘support systems,’ to breed
              collaborative dialogues that enable{' '}
              <span class="underline">multiplicities of</span>
              <span className="superscript" data-tip data-for="note-6">
                6
              </span>
              <ReactTooltip
                id="note-6"
                type="light"
                place="bottom"
                effect="solid"
                delayHide={500}
                className="annotations"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(footnotes[5].text, { renderer })
                  }}
                />
              </ReactTooltip>
              organizing, structuring and designing. Our work acknowledges the{' '}
              <i>current</i> to strategize and implement about what comes{' '}
              <i>next</i>.
            </p>

            <p>
              As a design and technology studio we frame our methodology via{' '}
              <span class="underline">collaboration</span>
              <span className="superscript" data-tip data-for="note-7">
                7
              </span>
              <ReactTooltip
                id="note-7"
                type="light"
                place="bottom"
                effect="solid"
                delayHide={500}
                className="annotations"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(footnotes[6].text, { renderer })
                  }}
                />
              </ReactTooltip>
              . We’re motivated to utilize creative technology as a tool to
              empower political and social practices that work towards fostering
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
