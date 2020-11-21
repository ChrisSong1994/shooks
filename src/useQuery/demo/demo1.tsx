import React from 'react';
import { useQuery } from 'shooks';
import { Button } from 'antd';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default () => {
  const { searchParams, searchValues } = useQuery();
  const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <div>
      <Button type="primary" onClick={() => history.push(`${url}?a=1&b=2`)}>
        设置查询参数'a=1&b=2'
      </Button>
      <Button
        type="primary"
        onClick={() => history.push(url)}
        style={{ marginLeft: 20 }}
      >
        重置
      </Button>

      <div>
        <b>JSON.stringify(searchValues):</b> {JSON.stringify(searchValues)}{' '}
      </div>
      <div>
        <b>searchParams.toString():</b> {searchParams.toString()}{' '}
      </div>
    </div>
  );
};
