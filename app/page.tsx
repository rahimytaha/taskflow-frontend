import Image from "next/image";
import Header from "./_components/header/header";
import HeroSection from "./_components/landing/heroSection/heroSection";
import Integrations from "./_components/landing/integrations/integrations";
import heroSectionDisplayExample from '../public/svg/heroSectionDisplayExample.svg'
import FeatureSection from "./_components/landing/featureSection/featureSection";
export default function Home() {
  return (
    <div>
      {/* <Header/>
      <HeroSection/>
      <Image className="block mx-auto mt-14 mb-28  " alt="heroSectionDisplayExample" src={heroSectionDisplayExample}/> */}
      <Integrations/>
      <FeatureSection/>

    </div>
  );
}
