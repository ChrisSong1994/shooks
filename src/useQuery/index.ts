import 'url-search-params-polyfill'; // ie 兼容

type queryType =
  | string
  | URLSearchParams
  | string[][]
  | Record<string, string>
  | undefined;

type searchValuesType = { [key: string]: string };

const useQuery = (value?: queryType) => {
  const searchParams = new URLSearchParams(value || window.location.search);

  const searchValues: searchValuesType = {};

  for (let [key, value] of searchParams.entries()) {
    searchValues[key] = value;
  }
  return { searchParams, searchValues };
};

export default useQuery;
