import Hero from "~/components/Hero";

export default function Index() {
  return (
    <div
      style={{
        background: `repeating-linear-gradient(0deg, rgb(236,236,236) 0px, rgb(236,236,236) 2px, transparent 2px, transparent 24px), repeating-linear-gradient(90deg, rgb(236,236,236) 0px, rgb(236,236,236) 2px, transparent 2px, transparent 24px), linear-gradient(white, white);`
      }} >

      <main className="max-w-[720px] py-20 mx-auto ">
        <Hero />
      </main>
    </div>
  );
}
