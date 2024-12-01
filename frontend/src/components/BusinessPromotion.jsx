import Section from "./Section";
import businessPromotion from "../assets/business_promotion.png";

function BusinessPromotion() {
  return (
    <Section title="Business Promotion" id="business_promotion">
      <img
        loading="lazy"
        src={businessPromotion}
        alt="Business Promotion"
        className="w-full "
      />
    </Section>
  );
}

export default BusinessPromotion;
