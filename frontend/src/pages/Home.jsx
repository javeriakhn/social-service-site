import Header from "../components/Header";
import FeatureCampaign from "../components/FeatureCampaign";
import BusinessPromotion from "../components/BusinessPromotion";
import CampaignForm from "../components/CampaignForm";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <main
      className="flex overflow-hidden flex-col items-center bg-white"
      style={{
        fontFamily: "Inknut Antiqua",
      }}
    >
      <Header />
      <Banner />
      <FeatureCampaign />
      <BusinessPromotion />
      <CampaignForm />
      <AboutUs />
      <Footer />
    </main>
  );
}

export default HomePage;
