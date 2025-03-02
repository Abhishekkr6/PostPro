import Image from "next/image";
import HeroSection from "./components/Herosection";


export default function Home() {
  return (
    <div className="relative z-10 bg-transparent">
        <HeroSection />
    </div>
  );
}
