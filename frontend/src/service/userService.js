import axios from "axios";

/**
 * Userservice to retrieve the user's profile information.
 * Sends a POST request to the server with the user's authentication token.
 * @param {string} token - The authentication token for the user.
 * @returns {Promise<Object>} - A promise that send the userData if the request is successful.
 * @throws {Error} - Throws an error if the request fails or if the response status is not 200.
 */

const userService = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      console.log("User profile retrieved successfully:", response.data);
      const userData = response.data.body;
      return { userData };
    } else {
      console.error("failed to get user with status", response.status);
      throw new Error("failed to get user");
    }
  } catch (error) {
    console.error("There was an error fetching the user profile:'", error);
    throw error;
  }
};

export default userService;
