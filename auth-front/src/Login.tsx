import { LoginWithPassword } from "./api/auth";

function Login() {
  return (
    <div>
      Login
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const username = event.target[0].value;
          const password = event.target[1].value;
          const data = await LoginWithPassword(username, password);
          const token = data.token;
          if (token) {
            document.cookie = `token=${token};`;
            window.location.href = "/";
          }
        }}
      >
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
