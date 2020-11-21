import React, { useState, Fragment } from 'react';
import { message, Button } from 'antd';
import { useMount } from 'shooks';

const MyComponent = () => {
  useMount(() => {
    message.info('组件加载');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, setState] = useState(false);

  return (
    <Fragment>
      <Button type="primary" onClick={() => setState(!state)}>
        {state ? 'unmount' : 'mount'}
      </Button>
      {state && <MyComponent />}
    </Fragment>
  );
};
