const prodApiBase = '/';
const devApiBase = 'http://localhost:5000/api/';
export const apiBase =
  process.env.NODE_ENV === 'development' ? devApiBase : prodApiBase;
export const appBase =
  process.env.NODE_ENV === 'development' ? '127.0.0.1:5000' : '/';

export const getData = (path) =>
  fetch(`${apiBase}${path}`, {
    method: 'GET',
  }).then((res) => {
    return res.json();
  });
