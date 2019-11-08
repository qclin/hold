import React from 'react';
import { useRouteData } from 'react-static';

export default function TagPanel(props) {
  const { tags } = useRouteData();

  return (
    <div className="tag-panel fl w-20">
      {tags.map(tag => (
        <a
          key={tag.id}
          className="tag-item"
          href={'#' + tag.value}
          onClick={() => console.log(tag.value)}
        >
          {tag.label}
        </a>
      ))}
    </div>
  );
}
