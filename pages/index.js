import Head from "next/head";
import Image from "next/image";
import { AboutUs } from "../components/AboutUs";
import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";
import { Hiking } from "../components/Hiking";
import { RighThings } from "../components/RighThings";
import { Testomiany } from "../components/Testomiany";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <AboutUs />
      <Gallery />
      <Hiking />
      <RighThings />
      <Testomiany />
    </div>
  );
}
