import axios from "axios";

/**
 * Editservice to edit the user's firstname and lastname.
 * Sends a PUT request to the server with the updated names and jwt token.
 * @param {string} firstName - The new firstname of the user.
 * @param {string} lastName - The new lastname of the user.
 * @param {string} token - The jwt token to verify the user.
 * @returns {Promise<Object>} - A promise that send the updated userdata if the request is successful.
 * @throws {Error} - Throws an error if the request fails or the response status is not 200.
 */

const editService = async (firstName, lastName, token) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/profile`,
      {
        firstName: firstName,
        lastName: lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      console.log("Change name of user successfully:", response.data);
      const userData = response.data.body;
      return { userData };
    } else {
      console.error("failed with status", response.status);
      throw new Error("failed to change name of user");
    }
  } catch (error) {
    console.error("There was an error to change the user name:'", error);
    throw error;
  }
};

export default editService;
