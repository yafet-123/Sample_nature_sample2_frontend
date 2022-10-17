import Head from "next/head";
import Image from "next/image";
import { AboutUs } from "../components/AboutUs";
import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";
import { Hiking } from "../components/Hiking";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <Gallery />
      <Hiking />
    </div>
  );
}
