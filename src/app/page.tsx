import { Header } from "@/components/sections/header";
import Title from "@/components/sections/title";
import NewsSection from "@/components/sections/news-section";
import { Trusted } from "@/components/sections/trusted";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import Certifications from "@/components/sections/certifications";
import Partners from "@/components/sections/partners";
import Consultation from "@/components/sections/consultation";
import Career from "@/components/sections/career";
import Contacts from "@/components/sections/contacts";

export default function Home() {
  return (
    <div className="min-h-screen pt-[27px]">
      <Header />
      <main>
        <Title />
        <Trusted />
        <Services />
        <Products />
        <Certifications />
        <Partners />
        <NewsSection />
        <Consultation />
        <Career />
        <Contacts />
      </main>
    </div>
  );
}
