import AboutMe from "@/components/AboutMe/AboutMe";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Info from "@/components/Info/Info";
import Prices from "@/components/Prices/Prices";
import Reviews from "@/components/Reviews/Reviews";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div className="mt-20">
      <AboutMe />
      <Info />
      <Services />
      <Prices />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}
