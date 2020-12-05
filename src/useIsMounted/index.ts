import { useState, useEffect } from 'react';

const useIsMounted = () => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    if (!isMount) setIsMount(true);
    return () => setIsMount(false);
  }, []);

  return isMount;
};

export default useIsMounted;
