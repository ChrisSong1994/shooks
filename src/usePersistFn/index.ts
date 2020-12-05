import { useEffect, useRef, useCallback } from 'react';

export type noop = (...args: any[]) => any;

// 函数持久化
const usePersistFn = <T extends noop>(fn: T): noop => {
  const ref = useRef<any>(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  // 此做法的目的是为了不在函数内变量变化的时候重复去创建函数,ref对象不会改变
  return useCallback((...args) => ref.current(...args) as T, [ref]);
};

export default usePersistFn;
