"use client";

import React from "react";
import  Header  from "@/components/sections/navbar/default";
import  Footer  from "@/components/sections/footer/default";
import TracingBeamDemo from "@/components/ui/TracingBeam";


const InstructionsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      

      <main className="flex-grow">
        <TracingBeamDemo />
      </main>

      <Footer />
    </div>
  );
};

export default InstructionsPage;
