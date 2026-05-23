import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Appeal from "@/components/sections/Appeal";
import ConsultingList from "@/components/sections/ConsultingList";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Appeal />
      <ConsultingList />
      <Testimonials />
      <Contact />
    </main>
  );
}
