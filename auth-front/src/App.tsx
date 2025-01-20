import { useEffect, useState } from "react";

import "./App.css";
import { getUsers } from "./api/users";

function App() {
  const [users, setUsers] = useState<{ name: string; id: string }[]>([]);
  useEffect(() => {
    async function fetchUser() {
      const data = await getUsers();
      setUsers(data);
    }
    fetchUser();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default App;
