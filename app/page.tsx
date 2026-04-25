import { headers } from "next/headers";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { Features } from "./components/Features";
import { ForSchools } from "./components/ForSchools";
import { ForParents } from "./components/ForParents";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { DownloadCTA } from "./components/DownloadCTA";
import { Footer } from "./components/Footer";

export default async function Home() {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") ?? "";
  const defaultRegion: "local" | "intl" = country === "NG" ? "local" : "intl";

  return (
    <>
      <Nav />
      <Hero />
      {/* <StatsBar /> */}
      <Features />
      <ForSchools />
      <ForParents />
      <HowItWorks />
      <Pricing defaultRegion={defaultRegion} />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </>
  );
}
