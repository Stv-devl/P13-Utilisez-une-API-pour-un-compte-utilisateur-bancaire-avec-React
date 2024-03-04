import axios from "axios";

const editService = async (firstName, lastName, token) => {
  try {
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
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

      console.log(userData);
      return { userData };
    } else {
      console.error("failedd with status", response.status);
      throw new Error("failed to change name of user");
    }
  } catch (error) {
    console.error("There was an error to change the user name:'", error);
    throw error;
  }
};

export default editService;
