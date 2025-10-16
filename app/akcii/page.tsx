"use client";

import Header from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import ItemsAkcii from "@/components/ui/item_akcii";
import ItemsAkciiMore from "@/components/ui/item_akcii_more";
import { Hero47 } from "@/components/ui/hero_akcii";


export default function Akcii() {
  return (
    <>
      <Header />
      <div className="mt-30">
        <Hero47 />
      </div>
      <ItemsAkcii />
      <ItemsAkciiMore />
      <Footer />
    </>
  );
}
