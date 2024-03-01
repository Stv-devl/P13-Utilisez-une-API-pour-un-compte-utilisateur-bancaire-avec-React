import axios from "axios";

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
