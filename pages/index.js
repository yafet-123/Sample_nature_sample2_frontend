import Head from "next/head";
import Image from "next/image";
import { AboutUs } from "../components/AboutUs";
import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <Gallery />
    </div>
  );
}
