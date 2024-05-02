import { useEffect, useState } from 'react';

const useTypingEffect = (items) => {
  const [typedIndex, setTypedIndex] = useState(-1);

  useEffect(() => {
    if (typedIndex < items.length - 1) {
      const timer = setTimeout(() => {
        setTypedIndex(typedIndex + 1);
      }, 0); // Wait for the current item to finish typing

      return () => clearTimeout(timer);
    }
  }, [typedIndex, items.length]);

  return typedIndex;
};

export default useTypingEffect;
