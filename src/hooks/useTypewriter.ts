import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
}

export function useTypewriter({
  text,
  speed = 38,
  startDelay = 600,
}: UseTypewriterOptions) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);

    let current = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;

    timer = setTimeout(() => {
      interval = setInterval(() => {
        current++;
        setCount(current);
        if (current >= text.length) {
          if (interval) clearInterval(interval);
        }
      }, speed);
    }, startDelay);

    return () => {
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  const displayed = text.slice(0, count);
  const done = count >= text.length;

  return { displayed, done };
}

