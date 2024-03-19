import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Section from "~/components/Section";
import Services from "~/components/Form";

export default function Index() {
  return (
    <div
      style={{
        background: `repeating-linear-gradient(0deg, rgb(236,236,236) 0px, rgb(236,236,236) 2px, transparent 2px, transparent 24px), repeating-linear-gradient(90deg, rgb(236,236,236) 0px, rgb(236,236,236) 2px, transparent 2px, transparent 24px), linear-gradient(white, white);`
      }} >

      <Navbar />
      <main className="max-w-[720px] py-14 mx-auto ">
        <Hero />
        <Section />
        <Services error={""} />
      </main>
    </div>
  );
}
