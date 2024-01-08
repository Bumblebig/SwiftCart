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
      category: "sneakers",
    },
    {
      id: 2,
      imgURL: Sandals,
      desc: "Sandals",
      category: "sandals",
    },
    {
      id: 3,
      imgURL: Slides,
      desc: "Slides",
      category: "slides",
    },
    {
      id: 4,
      imgURL: Crocs,
      desc: "Crocs",
      category: "crocs",
    },
    {
      id: 5,
      imgURL: Flips,
      desc: "Flip-Flops",
      category: "flip-flop",
    },
  ];

  const card = data.map((item) => {
    return (
      <CategoryCard
        key={item.id}
        image={item.imgURL}
        text={item.desc}
        ctgy={item.category}
      />
    );
  });

  return (
    <section className="mb-10 lg:mb-16">
      <h2 className="mb-8 font-bold sm:text-lg lg:mb-14 xl:text-2xl 2xl:mb-12">
        Categories
      </h2>
      <div className="m-auto flex sm:flex-shrink-0 flex-col items-center gap-7 sm:gap-10 lg:flex-row lg:flex-wrap lg:justify-center lg:items-stretch lg:gap-5 2xl:gap-7">
        {card}
      </div>
    </section>
  );
}
