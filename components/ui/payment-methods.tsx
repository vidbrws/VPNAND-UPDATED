"use client";
import Banks from "@/public/Untitled design.svg";
import Banks1 from "@/public/Untitled design.svg";
import Banks2 from "@/public/Untitled design.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [Banks, Banks1, Banks2];

export const PaymentMethods = () => {
  return (
    <div className="relative w-full justify-center overflow-hidden bg-background transition-colors duration-600 py-6 hidden md:flex">
      <div className="relative max-w-6xl w-full flex justify-center items-center overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex items-center gap-6 sm:gap-10 opacity-90"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 300,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center gap-6 sm:gap-10">
              {logos.map((logo, i) => (
                <Image
                  key={`${index}-${i}`}
                  src={logo}
                  alt={`logo-${i}`}
                  className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain dark:opacity-60"
                  priority
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
