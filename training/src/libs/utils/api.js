// import React from 'react';
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
      // console.log(res.data.Data);
      console.log(res, '###############');
      return res.data;
    } catch (error) {
      console.log(error.response.data.message, '****************');
      return error;
    }
  }
  if (request === 'get') {
    try {
      const res = await axios[request](`${config.url}${route}`, config);
      // console.log(res.data.Data);
      return res.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
  return '';
}

// export async function callApiCreate(userInfo) {
//   console.log(userInfo.email, userInfo.password, 'inside callApiCreate');
//   // const config = {
//   //   data: {
//   //     name: userInfo.name,
//   //     email: userInfo.email,
//   //     password: userInfo.password,
//   //     ceratedBy: 'Admin',
//   //     role: 'Trainee',
//   //   },
//   // };
//   // const header = {
//   //   headers: {
//   //     Authorization: localStorage.getItem('token'),
//   //   },
//   // };
//   try {
//     const res = await axios.post('http://localhost:9000/api/trainee/create', {
//       name: userInfo.name,
//       email: userInfo.email,
//       password: userInfo.password,
//       createdBy: 'Admin',
//       role: 'Trainee',
//     }, {
//       headers: {
//         Authorization: localStorage.getItem('token'),
//       },
//     });
//     console.log(res);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     return error.message;
//   }
// }
