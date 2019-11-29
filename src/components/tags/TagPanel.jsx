import React from 'react';
import { useRouteData } from 'react-static';

export default function TagPanel(props) {
  const { tags } = useRouteData();
  const {
    tagOn,
    tagFilter,
    handleTagSelection,
    relatedTags,
    hoverTags,
    fixed
  } = props;
  return (
    <div className="tag-panel fl w-20">
      <div className={fixed ? "fixed top-0": "fixed"}>
        {tags.map((tag, index) => {
          if (tagOn && !relatedTags.includes(tag)) {
            return (
              <div key={index} className="blur tag-item pointer">
                {tag}
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="tag-item pointer"
                onClick={() => handleTagSelection(tag)}
              >
                <span className={tagFilter == tag ? 'bg-off-white' : ''}>
                  {hoverTags.includes(tag) ? (
                    tag.toLowerCase()
                  ) : (
                    <span className="opacity-0">{tag.toLowerCase()}</span>
                  )}
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
