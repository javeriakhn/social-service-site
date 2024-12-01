import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between flex-wrap gap-3 self-stretch px-20 py-4 md:py-7 mt-32 w-full bg-stone-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h3 className="text-2xl md:text-4xl text-white flex-1">Follow Us on</h3>
      <nav className="flex gap-10 md:justify-center flex-1">
        <a href="#" aria-label="Facebook">
          <img
            loading="lazy"
            src={facebookIcon}
            alt=""
            className="object-contain shrink-0 w-8 md:w-12 aspect-square"
          />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img
            loading="lazy"
            src={linkedinIcon}
            alt=""
            className="object-contain shrink-0 w-8 md:w-12 aspect-square"
          />
        </a>
        <a href="#" aria-label="Instagram">
          <img
            loading="lazy"
            src={instagramIcon}
            alt=""
            className="object-contain shrink-0 w-8 md:w-12 aspect-square"
          />
        </a>
      </nav>
      <div className="md:flex-1"></div>
    </footer>
  );
}

export default Footer;
