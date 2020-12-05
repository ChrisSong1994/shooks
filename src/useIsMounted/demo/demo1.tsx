import React, { useState } from 'react';
import { useIsMounted } from 'shooks';
import { Button, message } from 'antd';

const SubComponment = () => {
  const isMounted = useIsMounted();

  if (isMounted) {
    debugger;
    message.info('component is loaded!');
  } else {
    debugger;
    message.info('component is unLoaded!');
  }

  const handleVideoLoad = () => {
    message.info('img is loaded');
  };

  return (
    <div>
      <img
        style={{ width: '100%' }}
        onLoad={handleVideoLoad}
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607195243821&di=0849c8fe55320d8fea346573e3ff4f27&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201303%2F18%2F233101zl8ouwl8l8e8eu7e.jpg"
      />
    </div>
  );
};

export default () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Button
        style={{ marginBottom: 10 }}
        type="primary"
        onClick={() => setShow(!show)}
      >
        {show ? '关闭图片' : '打开图片'}
      </Button>
      {show && <SubComponment />}
    </>
  );
};
