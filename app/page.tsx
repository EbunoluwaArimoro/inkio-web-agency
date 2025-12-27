import { Hero } from "@/components/sections/Hero";
import { Villain } from "@/components/sections/Villain";
import { Solutions } from "@/components/sections/Solutions";
import { Results } from "@/components/sections/Results";
import { ThePlan } from "@/components/sections/ThePlan";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Villain />
      <Solutions />
      <Results />
      <ThePlan />
      <CTA />
    </div>
  );
}