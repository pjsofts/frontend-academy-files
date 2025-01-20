import axios from "axios";

async function getUsers() {
  const response = await axios.get("http://localhost:3000/users", {
    withCredentials: true,
  });
  const data = response.data;
  console.log("users are", data);
  return data;
}

export { getUsers };
