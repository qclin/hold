import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import marked from 'marked';

export default function Annotation(props) {
  const { footnote, id, isMark, wide } = props;
  const renderer = new marked.Renderer();
  return (
    <>
      <span className="superscript" data-tip data-for={`note-${id}`}>
        {id}
      </span>
      <ReactTooltip
        id={`note-${id}`}
        type="light"
        place="bottom"
        effect="solid"
        delayHide={500}
        className={wide ? 'annotations wide' : 'annotations'}
      >
        {isMark ? (
          <div
            dangerouslySetInnerHTML={{
              __html: marked(footnote.text, { renderer })
            }}
          />
        ) : (
          footnote.text
        )}

        {footnote.images &&
          footnote.images.map(image =>
            image.split('.').reverse()[0] == 'pdf' ? (
              <object
                data={image}
                type="application/pdf"
                width="250"
                height="300"
              />
            ) : (
              <img src={image} />
            )
          )}
      </ReactTooltip>
    </>
  );
}
