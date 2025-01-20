import axios from "axios";
async function LoginWithPassword(username: string, password: string) {
  const response = await axios.post("http://localhost:3000/login", {
    username,
    password,
  });
  const data = response.data;
  console.log("inside login data is", data);
  return data;
}

export { LoginWithPassword };
