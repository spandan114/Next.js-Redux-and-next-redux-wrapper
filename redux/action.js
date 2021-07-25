import axios from "axios";

export const fetchAllUser = () => async (dispatch) => {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(users)
    dispatch({
      type: "FETCH_ALL_USER",
      payload: users,
    });
  } catch (error) {
    console.log(error);
  }
};
