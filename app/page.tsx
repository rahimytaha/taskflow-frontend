import Image from "next/image";
import Header from "./_components/header/header";
import HeroSection from "./_components/landing/heroSection/heroSection";
import Integrations from "./_components/landing/integrations/integrations";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Integrations/>
    </div>
  );
}
