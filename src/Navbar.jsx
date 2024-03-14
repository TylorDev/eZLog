import { Link } from "react-router-dom";
import { useAuth } from "./context/authContext";
export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  return (
    <nav className="">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/profile" : "/"}>Manager</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="font-bold text-lg">
              {" "}
              Welcome User: {user.username}
            </li>

            <li className="underline">
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="underline">
              <Link to="/login">Login</Link>
            </li>
            <li className="underline">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
