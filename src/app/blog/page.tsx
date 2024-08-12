import BlogSectionOne from "@/components/Blog/BlogSectionOne";
import BlogSectionThree from "@/components/Blog/BlogSectionThree";
import BlogSectionTwo from "@/components/Blog/BlogSectionTwo";
import { SwipeCarousel } from "@/components/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "This is Blog Page for Red Breed",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero
        titleClass="text-[26px] sm:text-3xl sm:leading-tight md:text-3xl xl:text-4xl 2xl:text-5xl"
        title="Technology Makes Life"
        subtitle="Easier and safer"
        subtitleClass="text-3xl sm:text-4xl  sm:leading-tight md:text-5xl xl:text-6xl 2xl:text-7xl md:leading-tight"
        content="Red Breed Technology: Revolutionizing businesses with cutting-edge technology solutions"
        image="/images/blog/hero.png"
      />
      <BlogSectionOne />
      {/* <div className="hidden md:block">
        <BlogSectionTwo />
      </div> */}
      {/* <div className="block md:hidden">
        <SwipeCarousel />
      </div> */}
      <BlogSectionThree />
    </>
  );
}
