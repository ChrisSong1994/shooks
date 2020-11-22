import { useRef } from 'react';

type compareFn = <T>(pre: T | undefined, next: T) => boolean;

const usePrevious = <T>(state: T, compare?: compareFn): T | undefined => {
  const preRef = useRef<T>();
  const curRef = useRef<T>();

  const needUpdate =
    (typeof compare === 'function' && compare(curRef.current, state)) || true;

  if (needUpdate) {
    preRef.current = curRef.current;
    curRef.current = state;
  }

  return preRef.current;
};

export default usePrevious;
