import { Outlet } from "react-router-dom";
import { Link } from "../router";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <ol style={{ listStyleType: "none" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/app">App</Link>
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
