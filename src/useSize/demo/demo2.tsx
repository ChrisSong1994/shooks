import React, { useRef } from 'react';
import { useSize } from 'hooks';

export default () => {
  const ref = useRef(null);
  const size = useSize(ref);

  return (
    <span
      ref={ref}
      style={{
        // width: '50%',
        // lineHeight: '50px',
        // height: '50px',
        padding: 10,
        border: '1px solid #000',
      }}
    >
      当前div的尺寸： width:{size.width}px height:{size.height}px
    </span>
  );
};
