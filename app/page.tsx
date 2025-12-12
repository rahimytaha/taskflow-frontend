import Image from "next/image";
import Header from "./_components/header/header";
import HeroSection from "./_components/landing/heroSection/heroSection";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
    </div>
  );
}
