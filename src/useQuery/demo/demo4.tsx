import React from 'react';
import { useQuery } from 'shooks';

export default () => {
  const { searchParams } = useQuery([
    ['a', 1],
    ['b', 2],
  ]);

  return <div>参数a={searchParams.get('a')}</div>;
};
