import React, { useState, Fragment } from 'react';
import { message } from 'antd';
import { useMount } from 'hooks';

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
      <button type="button" onClick={() => setState(!state)}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </Fragment>
  );
};
