import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__buttons">
            <Link className="link" to="/forsikl">
              For sikli operatori
            </Link>

            <Link className="link" to="">
              Bosh sahifa
            </Link>

            <Link className="link" to="/whilesikl">
              While sikli operatori
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
