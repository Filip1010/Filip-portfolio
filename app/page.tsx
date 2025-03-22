"use client";

import { useEffect } from "react";
import { navItems } from "@/data";
import { Analytics } from "@vercel/analytics/react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import dynamic from "next/dynamic";

// Dynamically import the Grid component with SSR disabled
const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
});

const Home = () => {
  useEffect(() => {
    // Any client-side only code can go here
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid /> {/* Grid is now dynamically imported */}
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
        <Analytics />
      </div>
    </main>
  );
};

export default Home;
