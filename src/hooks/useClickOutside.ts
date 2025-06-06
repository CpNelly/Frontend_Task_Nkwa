import { useEffect, RefObject } from 'react';

type Handler = () => void;

function useClickOutside<T extends HTMLElement, U extends HTMLElement = T>(
  ref: RefObject<T | null>,
  handler: Handler,
  excludeRef?: RefObject<U | null>
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      // Do nothing if clicking exclude ref's element or descendent elements
      if (excludeRef?.current && excludeRef.current.contains(target)) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, excludeRef]);
}

export default useClickOutside; 