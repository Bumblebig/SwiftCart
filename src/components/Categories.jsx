import CategoryCard from "./CategoryCard";
import Sandals from "../assets/sandals.jpg";
import Sneakers from "../assets/sneakers.jpg";
import Slides from "../assets/slides.jpg";
import Crocs from "../assets/crocs.jpg";
import Flips from "../assets/flip-flops.jpg";

export default function Categories() {
  const data = [
    {
      id: 1,
      imgURL: Sneakers,
      desc: "Sneakers",
    },
    {
      id: 2,
      imgURL: Sandals,
      desc: "Sandals",
    },
    {
      id: 3,
      imgURL: Slides,
      desc: "Slides",
    },
    {
      id: 4,
      imgURL: Crocs,
      desc: "Crocs",
    },
    {
      id: 5,
      imgURL: Flips,
      desc: "Flip-Flops",
    },
  ];

  const card = data.map((item) => {
    return <CategoryCard key={item.id} image={item.imgURL} text={item.desc} />;
  });

  return (
    <section className="mb-10 lg:mb-16">
      <h2 className="mb-8 sm:text-lg lg:mb-14">Categories</h2>
      <div className="m-auto flex sm:flex-shrink-0 flex-col items-center gap-7 sm:gap-10 lg:flex-row lg:flex-wrap lg:justify-center lg:items-stretch lg:gap-5">
        {card}
      </div>
    </section>
  );
}
