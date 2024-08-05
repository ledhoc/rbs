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
        title="Technology makes life"
        subtitle="easier and safer"
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
