import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function BusinessSubmitSuccessPage() {
  return (
    <main
      className="flex overflow-hidden flex-col items-center bg-white"
      style={{
        fontFamily: "Inknut Antiqua",
      }}
    >
      <Header />
      <section className="pt-0 w-3/4 mx-auto text-center text-black max-md:max-w-full my-[100px] md:my-[150px]">
        <h1 className="text-4xl md:text-6xl max-md:text-4xl leading-[120px] md:leading-[165px]">
          Thank you for submitting your business!
        </h1>
        <p className="text-2xl md:text-4xl mt-4 leading-[40px] md:leading-[103px]">
          Your business has been successfully submitted and is now under review.
          We will notify you once your promotion is live.
        </p>
      </section>
      <Link to="/" className="text-2xl md:text-5xl text-black ">
        Click here to get back Home
      </Link>
      <Footer />
    </main>
  );
}

export default BusinessSubmitSuccessPage;
