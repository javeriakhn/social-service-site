import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { campaigns } from "../components/FeatureCampaign";

function PaymentPage() {
  const { id } = useParams();
  const campaign = campaigns[id];

  return (
    <main
      className="flex overflow-hidden flex-col items-center bg-white"
      style={{
        fontFamily: "Inknut Antiqua",
      }}
    >
      <Header />
      <h1 className="my-20 md:my-28 text-6xl text-black max-md:mt-10 max-md:text-4xl">
        Payment
      </h1>
      <section className="mx-20 flex flex-col items-center p-10 md:p-20 w-full md:rounded-3xl bg-neutral-500 max-w-[1334px]">
        <div className="self-start max-w-full w-[917px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={campaign.image}
                alt=""
                className="object-contain grow shrink-0 max-w-full aspect-[1.17] w-[194px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
              <h2 className="text-4xl md:text-6xl text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                {campaign.title}
              </h2>
              <div className="mt-10 text-2xl md:text-4xl md:leading-[60px] text-white max-md:max-w-full">
                Bank Details <br />
                Account Name : ABC <br />
                Account Number : 12345678 <br />
                BSB : 123-456
              </div>
            </div>
          </div>
        </div>

        <p className="mt-20 text-2xl md:text-4xl text-white max-md:mt-10 max-md:max-w-full">
          Your Simple donation will make a big Difference
        </p>
      </section>
      <Link
        to="/"
        className="mt-20 text-5xl text-black max-md:mt-10 max-md:text-4xl"
      >
        Back to Home
      </Link>
      <Footer />
    </main>
  );
}

export default PaymentPage;
