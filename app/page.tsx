import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import {Install} from "../components/sections/phone_steps/Install";
import {RevealCard} from "../components/sections/reveal-card/default";
import  {MarqueeDemo} from "../components/sections/reviews/default";
import Items from "../components/sections/items/default";

export default function Home() {
  return (
    <>

      <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
           
      <Navbar />

        <Hero />
        
             <Logos />  
        <Items />
 
       
        <Install />

        <Pricing />
       
        <MarqueeDemo />
        
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}