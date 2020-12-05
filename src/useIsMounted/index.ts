import { useState, useLayoutEffect } from 'react';

const useIsMounted = () => {
  const [isMount, setIsMount] = useState(false);

  useLayoutEffect(() => {
    if (!isMount) setIsMount(true);
    return () => setIsMount(false);
  }, []);

  return isMount;
};

export default useIsMounted;
