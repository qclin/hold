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
      <div className={fixed ? 'fixed top-0' : ''}>
        {tagOn && (
          <>
            <button
              className="close clipped-shadow"
              onClick={() => handleTagSelection(null)}
            >
              Clear all x
            </button>
            {tags.map((tag, index) =>
              !relatedTags.includes(tag.id) ? (
                <div
                  key={index}
                  className={`blur tag-item pointer ${tag.type}`}
                >
                  {tag.name}
                </div>
              ) : (
                <div
                  key={index}
                  className="tag-item pointer"
                  onClick={() => handleTagSelection(tag.id)}
                >
                  <span className={tagFilter == tag ? 'bg-off-white' : ''}>
                    <span className={tag.type}>{tag.name}</span>
                  </span>
                </div>
              )
            )}
          </>
        )}

        {!tagOn &&
          tags.map((tag, index) => (
            <div
              key={index}
              className="tag-item pointer"
              onClick={() => handleTagSelection(tag.id)}
            >
              <span className={tagFilter == tag ? 'bg-off-white' : ''}>
                {hoverTags.includes(tag.id) ? (
                  <span className={tag.type}>{tag.name}</span>
                ) : (
                  <span className="blur">{tag.name}</span>
                )}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
