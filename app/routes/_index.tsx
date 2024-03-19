import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div >
      <h1 className="text-6xl font-bold text-violet-500">Hello Gohit Bastian 22</h1>
    </div>
  );
}
