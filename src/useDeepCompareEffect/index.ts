import { useEffect, useRef } from 'react';
import isEqual from 'lodash.isequal';

const useDeepCompareEffect = <T>(fn: React.EffectCallback, deps: T) => {
  let renderRef = useRef<number | any>(0);
  let depsRef = useRef<T>(deps);
  if (!isEqual(deps, depsRef.current)) {
    renderRef.current++;
  }
  depsRef.current = deps;
  return useEffect(fn, [renderRef.current]);
};

export default useDeepCompareEffect;
