import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export const useScroll = () => {
  // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
    direction: '',
    reachedBottom: false
  });

  const listener = e => {
    debugger;
    // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
    const bound = e.target.body.getBoundingClientRect();
    const html = e.target.documentElement;
    setScroll(prev => ({
      x: bound.left,
      y: -bound.top,
      // Here we’re comparing the previous state to the current state to get the scroll direction
      direction: prev.y > -bound.top ? 'up' : 'down',
      reachedBottom: bound.top + html.offsetHeight == html.clientHeight
    }));
  };

  const delay = 20;

  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, delay));
    // cleanup function occurs on unmount
    return () => window.removeEventListener('scroll', listener);
    // Run `useEffect` only once on mount, so add `, []` after the closing curly brace }
  }, []);

  return scroll;
};
