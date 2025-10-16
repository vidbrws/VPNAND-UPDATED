"use client";


import  Header  from "@/components/sections/navbar/default";
import  Footer  from "@/components/sections/footer/default";
import Pricing  from "@/components/sections/pricing/default";


export default function PartnerProgram() {
  return (
    <>
      <Header />
      <div className='mb-20'>
     <Pricing/>
     </div>
      <Footer />
    </>
  );
}