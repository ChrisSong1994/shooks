import React from 'react';
import { useQuery } from 'shooks';

export default () => {
  const { searchParams } = useQuery(`?a=1`);

  return <div>参数a={searchParams.get('a')}</div>;
};
