import axios from 'axios';

const getUsers = (name) =>
  axios
    .get(`https://api.github.com/search/users?q=${name}`)
    // .get('https://api.github.com/users')

    // console.log('products', products);
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
export default getUsers;
