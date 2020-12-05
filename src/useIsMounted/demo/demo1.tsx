import React from 'react';
import { useIsMounted } from 'shooks';
import { message } from 'antd';

export default () => {
  const isMounted = useIsMounted();

  if (isMounted) {
    message.info('component has been loaded!');
  }

  const handleVideoLoad = () => {
    message.info('video has been loaded');
  };
  return (
    <div>
      <video
        onLoad={handleVideoLoad}
        src="https://dpv.videocc.net/4723ce7453/7/4723ce7453eb947d371837709f5af3c7_3.mp4?pid=1607183544622X1259566"
      />
    </div>
  );
};
