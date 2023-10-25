import "./navbar.scss";

const Navbar = ({ title = "Page Title" }: { title?: string }) => {
  return (
    <nav>
      <img src="/vectors/chevron-left.svg" alt="back-icon" />
      <h2 className="header-title">{title}</h2>
      <img src="/vectors/more.svg" alt="more-icon" />
    </nav>
  );
};

export default Navbar;
