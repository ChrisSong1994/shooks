import React, { useState, useCallback, useRef, memo, Fragment } from 'react';
import { message } from 'antd';
import { usePersistFn } from 'shooks';
import { Button } from 'antd';

export default () => {
  const [count, setCount] = useState(0);

  const showCountPersistFn = usePersistFn(() => {
    message.info(`当前 count 为 ${count}`);
  });

  const showCountCommon = useCallback(() => {
    message.info(`当前 count 为 ${count}`);
  }, [count]);

  return (
    <Fragment>
      <Button
        type="primary"
        onClick={() => {
          setCount(c => c + 1);
        }}
      >
        Add Count
      </Button>

      <div style={{ marginTop: 32 }}>
        <h4>组件使用usePersistFn：</h4>
        <ExpensiveTree showCount={showCountPersistFn} />
      </div>
      <div style={{ marginTop: 32 }}>
        <h4>组件未使用usePersistFn:</h4>
        <ExpensiveTree showCount={showCountCommon} />
      </div>
    </Fragment>
  );
};

const ExpensiveTree = memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div>
      <p>Render Count: {renderCountRef.current}</p>
      <Button type="primary" onClick={showCount}>
        显示父级 Count
      </Button>
    </div>
  );
});
