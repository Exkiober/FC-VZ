import React, { useEffect, useRef } from 'react';

import './TypeWriter.css'

interface TypewriterProps {
  toRotate: string[]; // Array of strings to display
  period?: number; // Pause duration between sentences
  stopTime?: number; // Time to stop after typing a full sentence
  typingSpeed?: number; // Base typing speed
}

const Typewriter: React.FC<TypewriterProps> = ({ toRotate, period , stopTime , typingSpeed  }) => {
  const el = useRef<HTMLSpanElement>(null);
  const loopNum = useRef(0);
  const txt = useRef('');
  const isDeleting = useRef(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null); // To store the timeout

  useEffect(() => {
    const tick = () => {
      const i = loopNum.current % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeleting.current) {
        txt.current = fullTxt.substring(0, txt.current.length - 1);
      } else {
        txt.current = fullTxt.substring(0, txt.current.length + 1);
      }

      if (el.current) {
        el.current.innerHTML = `<span class="wrap">${txt.current}</span>`;
      }

      let delta = (typingSpeed ?? 200) - Math.random() * 50; // Adjusted for faster typing speed // Adjusted for faster typing speed

      if (isDeleting.current) {
        delta /= 2; // Speed up deletion
      }

      if (!isDeleting.current && txt.current === fullTxt) {
        // When the full text is typed
        isDeleting.current = true;
        delta = stopTime ?? 0; // Set stop time after typing the full sentence
      } else if (isDeleting.current && txt.current === '') {
        // When the text is fully deleted
        isDeleting.current = false;
        loopNum.current++;
        delta = period ?? 0; // Set period for the next sentence
      }

      typingTimeout.current = setTimeout(tick, delta);
    };

    tick(); // Start the typing effect

    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current); // Cleanup timeout on unmount
      }
    };
  }, [toRotate, period, stopTime, typingSpeed]);

  

  return <span ref={el} className="typewrite"></span>;
};

export default Typewriter;