import { useState, useEffect } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(identifier);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
