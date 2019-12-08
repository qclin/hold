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
    <div className="tag-panel fl w-20-ns">
      <div className={fixed ? 'fixed top-0' : 'fixed'}>
        {tagOn && (
          <button
            className="close clipped-shadow"
            onClick={() => handleTagSelection('')}
          >
            Clear all x
          </button>
        )}
        {tags.map((tag, index) => {
          if (tagOn && !relatedTags.includes(tag.name)) {
            return (
              <div key={index} className={`blur tag-item pointer ${tag.type}`}>
                {tag.name}
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="tag-item pointer"
                onClick={() => handleTagSelection(tag.name)}
              >
                <span className={tagFilter == tag ? 'bg-off-white' : ''}>
                  {hoverTags.includes(tag.name) ? (
                    <span className={tag.type}>{tag.name}</span>
                  ) : (
                    <span className="blur">{tag.name}</span>
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
