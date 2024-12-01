import { Link } from "react-router-dom";
import RegularButton from "./Button";

function CampaignCard({ image, title, buttonText, id }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-center">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain self-stretch w-full aspect-[1.08] max-md:max-w-full"
        />
        <h3 className="text-2xl text-center w-4/5 mt-4 flex-1">{title}</h3>
        <Link to={`/payment/${id}`}>
          <RegularButton>{buttonText}</RegularButton>
        </Link>
      </div>
    </div>
  );
}

export default CampaignCard;
