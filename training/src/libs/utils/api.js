// import React from 'react';
import axios from 'axios';

export default async function callApi(Email, Password) {
  console.log(Email, Password, 'inside callApi');
  const config = {
    method: 'POST',
    url: 'http://localhost:3000/login',
    data: {
      email: Email,
      password: Password,
    },
  };
  try {
    const res = await axios.post('http://localhost:9000/api/user/login', config.data);
    // console.log(res.data.Data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}
