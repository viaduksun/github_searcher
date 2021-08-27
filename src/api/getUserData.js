import axios from 'axios';

const getUserData = (url) => {
  const userName = "";
  const password = "";
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(`${userName}:${password}`)}`,
  };
  return axios
    .get(url)

};
export default getUserData;
