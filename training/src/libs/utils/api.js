import axios from 'axios';

export default async function callApi(userInfo, request, route) {
  console.log('inside callApi');
  const config = {
    url: 'http://localhost:9000/api',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };
  if (request === 'post') {
    try {
      const res = await axios[request](`${config.url}${route}`, userInfo, config);
      console.log(res, '###############');
      return res.data;
    } catch (error) {
      console.log(error.response.status, '****************');
      if (error.response.status === 401) {
        localStorage.removeItem('token');
      }
      return error;
    }
  }
  if (request === 'get') {
    try {
      const res = await axios[request](`${config.url}${route}`, config);
      return res.data;
    } catch (error) {
      console.log(error.response.status);
      localStorage.removeItem('token');
      return error.response.status;
    }
  }
  return '';
}
