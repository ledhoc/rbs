"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { BlogDataSituation } from "@/components/Blog/blogData";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === BlogDataSituation.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < BlogDataSituation.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative -mt-20 overflow-hidden pb-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {BlogDataSituation.map((item, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 rounded-xl border-[0.5px] border-primary bg-white object-cover shadow-lg"
          >
            <div className="flex flex-col rounded-2xl p-4">
              <p className="text-3xl font-semibold text-primary">
                {item.rowOneValue}
              </p>
              <p className="mt-3 text-gray-light">{item.rowOneTitle}</p>
              <p className="mt-3 text-gray-light">{item.rowTwoInfo}</p>
              <p className="mt-5 text-base font-semibold text-gray-light">
                {item.rowThreeTitle}
              </p>
              <p className="mt-3 text-gray-light">{item.rowThreeSubTitle}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {BlogDataSituation.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-primary" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
