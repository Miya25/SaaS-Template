"use client";

import Container from "@/components/container";
import Navbar from "@/components/navbar";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Hero from "@/components/hero";
import Features from "@/components/Features";
import Footers from "@/components/footer"

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Footers />
    </Container>
  );
}
