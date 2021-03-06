import { useState } from 'react';
// take in an initial mode
// set the mode state with the initial mode provided
// return an object with a mode property

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  // eslint-disable-next-line
  const [history, setHistory] = useState([initial]);

  // allows to transition to a new mode
  const transition = (newMode, replace = false) => {
    if (!replace) {
      setHistory((prev) => [...prev, newMode]);
    }
    setMode(newMode);
  }

  // allows to call back to return to previous mode
  const back = () => {
     let newHistory = [...history];
    newHistory.pop(mode);
    setHistory((prev) => newHistory);
    if (history.length > 1) {
      setMode((prev) => newHistory[(newHistory.length - 1)]);
    }
  };

  return { mode, transition, back }
}