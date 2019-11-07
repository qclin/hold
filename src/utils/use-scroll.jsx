import { useState, useEffect } from "react";

export const useScroll = () => {
  // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
    direction: ""
  });

  const listener = e => {
    // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
    setScroll(prev => ({
      x: e.srcElement.body.scrollX,
      y: e.srcElement.body.scrollY,
      direction: prev.y > window.scrollY ? "up" : "down"
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return scroll;
};
