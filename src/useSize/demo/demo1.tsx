import React from 'react';
import { useSize } from 'hooks';

export default () => {
  const size = useSize();

  return (
    <>
      当前页面body的尺寸： width:{size.width}px height:{size.height}px
    </>
  );
};
