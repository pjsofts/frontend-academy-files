import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header className="pt-2">
        <Link className="border border-black p-2 m-2 rounded" to="/todos">
          Todos
        </Link>
        <Link className="border border-black p-2 m-2 rounded" to="/state">
          State
        </Link>
      </header>

      <Outlet />
    </div>
  );
}

export default Layout;
