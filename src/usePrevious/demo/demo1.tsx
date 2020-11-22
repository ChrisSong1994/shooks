import { usePrevious } from 'shooks';
import React, { useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <>
      <div>counter current value: {count}</div>
      <div style={{ marginBottom: '10px' }}>
        counter previous value: {previous}
      </div>
      <Button type="primary" onClick={() => setCount(c => c + 1)}>
        increase
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={() => setCount(c => c - 1)}
      >
        decrease
      </Button>
    </>
  );
};
