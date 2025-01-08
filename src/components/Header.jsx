import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-box">
          <Link to="/">
            <img
              className="header-logo"
              src="./src/assets/images/logo.svg"
              alt="logo"
            />
          </Link>

          <ul className="header-list">
            <li className="header-item">
              <Link to="/homepage" className="header-link">
                главная
              </Link>
            </li>
            <li className="header-item">
              <Link to="/trainings" className="header-link">
                тренировки
              </Link>
            </li>
            <li className="header-item">
              <Link to="/stats" className="header-link">
                статьи
              </Link>
            </li>
          </ul>
          <button className="logoutBtn">
            <img
              className="header-Logout"
              src="src/assets/images/logOut.png"
              alt="Logout"
            />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
