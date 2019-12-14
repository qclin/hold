import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import marked from 'marked';

export default function Annotation(props) {
  const { footnote, id, isMark, wide } = props;
  return (
    <>
      <span className="superscript number" data-tip data-for={`note-${id}`}>
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
        {isMark ? renderMark(footnote.text) : footnote.text}
        {footnote.images && footnote.images.map(image => renderImage(image))}
      </ReactTooltip>
    </>
  );
}

export function renderMark(text) {
  const renderer = new marked.Renderer();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(text, { renderer })
      }}
    />
  );
}
export function renderImage(image) {
  const isPDF = image.split('.').reverse()[0] == 'pdf';

  if (isPDF) {
    return (
      <object data={image} type="application/pdf" width="250" height="300" />
    );
  }
  return <img src={image} />;
}
