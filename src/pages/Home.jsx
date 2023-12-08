import { Hero, Featured, Categories, Steps } from "../components";

export default function Home() {
  return (
    <section className="px-5 sm:px-7">
      <Hero />
      <Featured />
      <Categories />
      <Steps />
    </section>
  );
}
