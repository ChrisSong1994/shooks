import { useState, useLayoutEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { BasicTarget, getTargetElement } from '../utils/dom';

type Size = { width?: number; height?: number };

/**
 *  @param {BasicTarget} target
 *  @returns {Size}
 */
function useSize(target?: BasicTarget): Size {
  const rafRef = useRef(0);

  const [size, setSize] = useState<Size>(() => {
    const el = getTargetElement(target) || window.document.body;
    return {
      width: (el as HTMLElement).clientWidth,
      height: (el as HTMLElement).clientHeight,
    };
  });

  useLayoutEffect(() => {
    const el = getTargetElement(target) || window.document.body;

    const resizeObserver = new ResizeObserver(entries => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        entries.forEach(entry => {
          setSize({
            width: entry.target.clientWidth,
            height: entry.target.clientHeight,
          });
        });
      });
    });
    resizeObserver.observe(el as HTMLElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [typeof target === 'function' ? undefined : target]);

  return size;
}

export default useSize;
