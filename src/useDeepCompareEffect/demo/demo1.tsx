import React, { useState, useEffect } from 'react';
import { useDeepCompareEffect } from 'shooks';
import { Button, message } from 'antd';

export default () => {
  const [value, setValue] = useState({ data: 0 });

  useDeepCompareEffect(() => {
    message.info(`useDeepCompareEffect 依赖已更新:${value.data}`);
  }, [value]);

  useEffect(() => {
    message.info(`useEffect依赖已更新:${value.data}`);
  }, [value]);

  const resetValue = () => setValue({ data: 0 });

  const changeValue = () => setValue({ data: value.data + 1 });

  return (
    <>
      <h3> 当前数据：{JSON.stringify(value)} </h3>
      <Button type="primary" onClick={resetValue}>
        重置数据
      </Button>
      <Button type="primary" onClick={changeValue}>
        更改数据
      </Button>
    </>
  );
};
