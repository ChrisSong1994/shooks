import React from 'react';
import { useUpdate } from 'shooks';
import { Button } from 'antd';

export default () => {
  const update = useUpdate();
  debugger;

  return (
    <>
      <div>Time: {Date.now()}</div>
      <Button type="primary" onClick={update} style={{ marginTop: 16 }}>
        update
      </Button>
    </>
  );
};
