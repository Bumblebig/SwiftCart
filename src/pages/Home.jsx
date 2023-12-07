import { Hero, Featured, Categories } from "../components";

export default function Home() {
    return(
        <section className="px-5">
            <Hero />
            <Featured />
            < Categories/>
        </section>
    )
}