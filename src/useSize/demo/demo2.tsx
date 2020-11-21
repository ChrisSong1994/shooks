import React, { useRef } from 'react';
import { useSize } from 'shooks';

export default () => {
  const ref = useRef(null);
  const size = useSize(ref);

  return (
    <textarea
      ref={ref}
      name="textarea"
      rows={5}
      cols={50}
      style={{ resize: 'both' }}
      value={` 当前 textarea 的尺寸： width:${size.width}px height:${size.height}px`}
    />
  );
};
