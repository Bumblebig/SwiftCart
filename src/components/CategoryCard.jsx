export default function CategoryCard({ image, text }) {
  const style = {
    backgroundImage: `linear-gradient(180deg, rgba(4,4,4,0.27494747899159666) 49%, rgba(4,4,4,0.908000700280112) 81%), url("${image}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <figure
      className="w-11/12 h-60 max-w-sm sm:max-w-xl sm:h-80 flex flex-col items-center justify-end p-3"
      style={style}
    >
      <div>
        <p className="text-white text-center text-base sm:text-lg font-bold">
          {text}
        </p>
        <button className="mt-3 bg-hero-desc text-white px-3 py-2 text-sm sm:text-base">
          Shop now &rarr;
        </button>
      </div>
    </figure>
  );
}
