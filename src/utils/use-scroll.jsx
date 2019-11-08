import { useState, useEffect } from 'react';

export const useScroll = () => {
  // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
  const [scroll, setScroll] = useState({
    x: document.body.getBoundingClientRect().left,
    y: document.body.getBoundingClientRect().top,
    direction: '',
    reachedBottom: false
  });

  const listener = e => {
    // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
    const bound = document.body.getBoundingClientRect();
    const html = document.documentElement;
    console.log(bound.top, html.offsetHeight, html.clientHeight);
    setScroll(prev => ({
      x: bound.left,
      y: -bound.top,
      // Here we’re comparing the previous state to the current state to get the scroll direction
      direction: prev.y > -bound.top ? 'up' : 'down',
      reachedBottom: bound.top + html.offsetHeight == html.clientHeight
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    // cleanup function occurs on unmount
    return () => window.removeEventListener('scroll', listener);
    // Run `useEffect` only once on mount, so add `, []` after the closing curly brace }
  }, []);

  return scroll;
};
