import Footer from "../components/Footer";
import Header from "../components/Header";
import BusinessBanner from "../assets/business_banner.png";
import { useNavigate } from "react-router-dom";

const BusinessPage = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/businessSubmitSuccess");
  };
  return (
    <main
      className="flex overflow-hidden flex-col items-center bg-white"
      style={{
        fontFamily: "Inknut Antiqua",
      }}
    >
      <Header />
      <div className="relative w-full flex justify-center items-center min-h-96">
        <img
          src={BusinessBanner}
          alt="Awareness Banner"
          className="w-full min-h-[600px]  max-h-screen object-cover"
        />
        <div className="absolute left-0 top-0 w-full h-full px-5 py-10 flex flex-col lg:flex-row">
          <div className="flex-1 lg:pt-10">
            <div className="flex flex-col h-full mt-auto md:h-3/4 gap-10">
              <h1 className="z-10 mr-11 text-5xl md:text-7xl font-extrabold text-black max-md:mr-2.5 max-md:max-w-full max-md:text-4xl leading-[88px]">
                Promote Your Business
              </h1>
              <p className="mt-0 text-3xl lg:text-4xl font-semibold text-black max-md:max-w-full leading-[60px] lg:leading-[88px]">
                Share your business with our community and grow your brand
                instantly.
              </p>
            </div>
          </div>
          <div className="flex-1 h-full self-end flex justify-end items-end relative w-full">
            <button className="z-10 md:absolute md:right-[10%] md:bottom-[10%] px-11 py-1.5 text-3xl md:text-4xl font-semibold text-white bg-black rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full h-[100px]">
              Start Promoting Now
            </button>
          </div>
        </div>
      </div>

      <section className="flex flex-col px-20 mt-4 w-full text-black max-md:px-5 max-md:max-w-full">
        <h2 className="md:text-6xl font-bold text-4xl my-10">
          Enter Your Business Details
        </h2>
        <form
          className="flex flex-col px-20 py-10 text-2xl md:text-3xl bg-neutral-500 max-md:px-5 max-md:max-w-full"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col max-md:max-w-full gap-7">
            <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-between max-md:mr-2.5 max-md:max-w-full">
              <div className="flex-1">
                <label htmlFor="businessName" className="sr-only">
                  Business name
                </label>
                <input
                  id="businessName"
                  type="text"
                  placeholder="Business name"
                  className="px-16 bg-zinc-300 rounded-[40px] max-md:px-5 max-md:max-w-full w-full h-24 "
                />
              </div>
              <div className="flex-1">
                <label htmlFor="websiteLink" className="sr-only">
                  Website Link
                </label>
                <input
                  id="websiteLink"
                  type="url"
                  placeholder="Website Link"
                  className="px-16 bg-zinc-300 rounded-[40px] max-md:px-5 max-md:max-w-full w-full h-24"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="contactInfo" className="sr-only">
                Contact Info
              </label>
              <input
                id="contactInfo"
                type="text"
                placeholder="Contact Info"
                className="px-16 pt-1 pb-3.5 max-w-full w-full md:w-1/2 bg-zinc-300 rounded-[40px] ] max-md:px-5 h-24"
              />
            </div>
            <div className="">
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Description......"
                className="px-7 py-5 h-44 whitespace-nowrap bg-zinc-300 max-md:px-5 max-md:pb-28  max-md:max-w-full w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-end px-16 py-3.5 font-bold text-white whitespace-nowrap bg-black rounded-[40px] "
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
};

export default BusinessPage;
