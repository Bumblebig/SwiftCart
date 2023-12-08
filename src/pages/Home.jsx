import { Hero, Featured, Categories, Steps } from "../components";

export default function Home() {
    return(
        <section className="px-5">
            <Hero />
            <Featured />
            <Categories />
            <Steps />
        </section>
    )
}