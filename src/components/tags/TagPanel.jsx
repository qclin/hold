import React from 'react';
import { useRouteData } from 'react-static';

export default function TagPanel(props) {
  const { tags } = useRouteData();
  const { tagOn, tagFilter, handleTagSelection, relatedTags } = props;

  return (
    <div className="tag-panel fl w-20">
      {tags.map((tag, index) => {
        if (tagOn && !relatedTags.includes(tag)) {
          return (
            <div key={index} className="blur tag-item grab">
              {tag}
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="tag-item grab"
              onClick={() => handleTagSelection(tag)}
            >
              <span className={tagFilter == tag ? 'bg-off-white' : ''}>
                {tag}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
}
