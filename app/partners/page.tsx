"use client";


import  Header  from "@/components/sections/navbar/default";
import  Footer  from "@/components/sections/footer/default";
import {Hero47} from "@/components/ui/hero_partners";
import ItemsPartners from "@/components/ui/item_partners";
import FAQ from "@/components/ui/faq_partners";

export default function PartnerProgram() {
  return (
    <>
      <Header />
      <div className='mt-30'>
     <Hero47/>
     
     </div>
     <ItemsPartners/>
     <FAQ/>
      <Footer />
    </>
  );
}