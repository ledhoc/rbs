import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import ogImage from "../../public/images/hero/touch.png";
export const metadata: Metadata = {
  title: "Red Breed",
  openGraph: {
    images: [
      { url: ogImage.src, width: ogImage.width, height: ogImage.height },
    ],
  },
  description:
    "Leading IT consulting and talent solutions for business success",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionTwo />
      <Features />
      <Pricing />
    </>
  );
}
