const Title = () => (
    <a href="/">
      <img
        alt="logo"
        className="logo"
        src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
      />
    </a>
  );

const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;