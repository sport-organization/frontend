function Header() {
  return (
    <>
      <header className="header">
        <div className="header-box">
          <img
            className="header-logo"
            src="./src/assets/images/logo.svg"
            alt="logo"
          />
          <ul className="header-list">
            <li className="header-item">
              <a className="header-link" href="./index.html">
                главная
              </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="#">
                тренировки
              </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="#">
                статьи
              </a>
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
