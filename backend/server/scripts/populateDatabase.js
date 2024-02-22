const axios = require("axios");
const signupApi = "http://localhost:3001/api/v1/user/signup";

const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
  },
];

users.forEach((user, index) => {
  axios
    .post(signupApi, user)
    .then((response) => {
      console.log(`User ${index + 1} successfully added:`, response.data);
    })
    .catch((error) => {
      console.error(`Error adding user ${index + 1}:`, error.response.data);
    });
});
