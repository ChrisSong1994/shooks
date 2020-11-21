import React from 'react';
import { useLocation } from 'react-router-dom';
import 'url-search-params-polyfill'; // ie 兼容问题

type queryType =
  | string
  | URLSearchParams
  | string[][]
  | Record<string, string>
  | undefined;

type searchObjectType = { [key: string]: string };

const useQuery = (value?: queryType) => {
  const searchParams = new URLSearchParams(value || useLocation().search);
  const searchObject: searchObjectType = {};
  for (let [key, value] of searchParams.values()) {
    searchObject[key] = value;
  }
  return { searchParams, searchObject };
};

export default useQuery;
