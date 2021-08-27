import axios from 'axios';

const getUsers = (name) => {
  const userName = "";
  const password = "";
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(`${userName} : ${password}`)}`,
  };
  return axios
    .get(`https://api.github.com/search/users?q=${name}&per_page=10`)
}
export default getUsers;
