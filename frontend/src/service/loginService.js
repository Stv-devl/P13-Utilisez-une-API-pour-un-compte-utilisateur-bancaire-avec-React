import axios from "axios";

/**
 * loginService to authenticate a user.
 * Sends a POST request to the server with the user's credentials.
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} - A promise with the user's jwt token if login is successful.
 * @throws {Error} - Throws an error if the login request fails or if the response status is not 200.
 */

const loginService = async (username, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/login`,
      {
        email: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      console.log("Login successful");
      const token = await response.data.body.token;
      return { token };
    } else {
      console.error("Login failed with status", response.status);
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export default loginService;
