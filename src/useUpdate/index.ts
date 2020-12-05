import { useState, useCallback } from 'react';

// 调用useState更新状态
const useUpdate = () => {
  const [_, setState] = useState(0);
  return useCallback(() => setState((num: number): number => num + 1), []);
};

export default useUpdate;
