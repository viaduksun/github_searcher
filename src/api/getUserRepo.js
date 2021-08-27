import axios from 'axios';

const getUserRepo = (url) =>
  axios
    .get(url)
    // .get('https://api.github.com/users')

    // console.log('products', products);
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
export default getUserRepo;
