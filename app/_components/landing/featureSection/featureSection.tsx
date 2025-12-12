import Image from "next/image";
import featureTopText from "../../../../public/svg/landing/featureTopText.svg";
const FeatureSection = () => {
  return (
    <div>
      <Image
        className="block mx-auto mt-44 "
        alt="feature Top Text"
        src={featureTopText}
      />
      <div className="font-bold text-[55px]  text-center ">
        <h3>The features </h3>
        <h3>Both familiar and new.</h3>
      </div>
    </div>
  );
};

export default FeatureSection;
