import CampaignCard from "./CampaignCard";
import Campaign1 from "../assets/Feature Campaign/campaign1.png";
import Campaign2 from "../assets/Feature Campaign/campaign2.png";
import Campaign3 from "../assets/Feature Campaign/campaign3.png";
import Section from "./Section";

const campaigns = [
  {
    id: 0,
    image: Campaign1,
    title: "Addiction of Technology",
    buttonText: "Donate",
  },
  {
    id: 1,
    image: Campaign2,
    title: "Mental health during & after a natural disaster",
    buttonText: "Donate",
  },
  {
    id: 2,
    image: Campaign3,
    title: "Save the Childern",
    buttonText: "Donate",
  },
];

function FeatureCampaign() {
  return (
    <Section title="Feature Campaign" id="feature_campaign">
      <div className="flex gap-5 max-md:flex-col">
        {campaigns.map((campaign, index) => (
          <CampaignCard key={index} {...campaign} />
        ))}
      </div>
    </Section>
  );
}

export default FeatureCampaign;
export { campaigns };
