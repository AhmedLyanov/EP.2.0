import "./style.css";
import logo from '../../assets/logo.png'
function Header() {
  return (
    <div className="container__header max-h-32 h-128 p-8">
      <div className="container__header_main">
        <div className="container__logotype_header">
            <img src={logo} alt="" />
        </div>
        <nav className="navigation__header w-full">

        </nav>
      </div>
    </div>
  );
}

export default Header;
