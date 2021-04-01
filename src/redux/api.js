// @flow

const API_KEY = '17f5b1b9edaca0b97ee5aa99274079a0';

const buildQueryString = (obj: {}): string => {
  if (!obj || !Object.keys(obj).length) {
    return '';
  }

  return `?${Object.keys(obj)
    .map(k => `${k}=${obj[k]}`)
    .join('&')}`;
};

const api = async function api(route: string, params?: any = {}): Promise<any> {
  const queries = {
    api_key: API_KEY,
    ...params,
  };

  const requestUrl = `https://api.themoviedb.org/3${route}${buildQueryString(
    queries,
  )}`;

  const res = await fetch(requestUrl, {});

  return res.json();
};

export default api;
