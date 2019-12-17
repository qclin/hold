import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import marked from 'marked';
import useWindowSize from '../../utils/use-window';

export default function Annotation(props) {
  const { isDesktop } = useWindowSize();

  const { footnote, id, isMark, wide } = props;
  if (!isDesktop) {
    return (
      <a className="superscript number" href={`#footnote-${id}`}>
        {id}
      </a>
    );
  }
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
