"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScrollOferta = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -2]);

  return (
    <div className="flex flex-col items-center justify-center p-4" ref={containerRef}>
      <motion.div
        className="w-full max-w-5xl text-center"
        style={{
          translateY: translate,
        }}
      >
        {titleComponent}
      </motion.div>
      <motion.div
        style={{
          rotateX: rotate,
          scale,
          boxShadow:
            "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          translateY: translate,
        }}
        className="w-full scroll-mb-20  mb-40 max-w-4xl mt-2 border-1 border-gray-300 p-2 rounded-2xl shadow-lg "
      >
        <div className="w-full  rounded-2xl bg-[#f9f9f9] dark:bg-zinc-900 p-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};


export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mt-1 md:mt-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl mx-auto w-full min-h-[25rem] md:min-h-[35rem] border-2 border-[#d9d6d6] p-3 bg-[#f1f1e0] rounded-[30px] shadow-2xl"
    >
      <div className="w-full  rounded-2xl  p-4">
        {children}
      </div>
    </motion.div>
  );
};
