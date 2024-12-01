import { Link } from "react-router-dom";
import { HeaderButton } from "./Button";
import { FaSearch } from "react-icons/fa";
import cart from "../assets/icons/cart.svg";

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-stretch px-7 py-5 w-full text-3xl text-black max-md:px-5 max-md:max-w-full from-black bg-gradient-to-r">
      <div className="flex flex-wrap gap-10 items-center">
        <Link to="#">
          <FaSearch color="white" size={48} />
        </Link>
        <nav className="flex flex-wrap flex-col md:flex-row flex-auto gap-0 md:gap-4">
          <Link to="/signup">
            <HeaderButton>Join Us</HeaderButton>
          </Link>
          <a href="/#feature_campaign">
            <HeaderButton href="#feature_campaign">Campaign</HeaderButton>
          </a>
          <a href="/#business_promotion">
            <HeaderButton href="#business_promotion">Promotion</HeaderButton>
          </a>
          <Link to="/business">
            <HeaderButton href="#business_promotion">Business</HeaderButton>
          </Link>
        </nav>
      </div>
      <img
        loading="lazy"
        src={cart}
        alt=""
        className="object-contain shrink-0 my-auto w-12 aspect-square"
      />
    </header>
  );
};

export default Header;
