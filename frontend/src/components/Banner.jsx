import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative w-full flex justify-center items-center bg-black">
      <img
        src={bannerImage}
        alt="Awareness Banner"
        className="w-full h-auto max-h-screen object-cover"
      />

      <div className="absolute bottom-[10%] right-[5%] md:right-[10%]">
        <Link to="/signin">
          <button className=" bg-zinc-300 rounded-[20px] md:rounded-[40px] h-14 w-32 md:h-28 md:w-64 text-2xl md:text-4xl">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
