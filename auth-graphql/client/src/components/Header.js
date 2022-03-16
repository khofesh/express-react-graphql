import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router";
import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";

function Header() {
  const { data, refetch } = useQuery(query);
  const [logout, { loading, error }] = useMutation(mutation);

  async function onLogoutClick() {
    await logout();

    await refetch();
  }

  function renderButtons() {
    if (loading) {
      return <div />;
    }

    if (data.user) {
      return (
        <li>
          <a onClick={onLogoutClick}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
}

export default Header;
