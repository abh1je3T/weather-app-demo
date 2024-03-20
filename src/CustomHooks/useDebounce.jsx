import { useEffect, useRef } from "react";

export const useDebounce = (props) => {
  const { callback, value, delay = 500, block = false } = props;
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (block) return;
    timeoutRef.current = setTimeout(callback, delay);
    return () => {
      //closure timeoutRef 1st time
      clearTimeout(timeoutRef.current);
    };
  }, [value]);
};