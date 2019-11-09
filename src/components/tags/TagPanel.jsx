import React from 'react';
import { useRouteData } from 'react-static';

export default function TagPanel(props) {
  const { tags } = useRouteData();
  const { handleTagSelection } = props;
  return (
    <div className="tag-panel fl w-20">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="tag-item grab"
          onClick={() => handleTagSelection(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
