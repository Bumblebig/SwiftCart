import StepBlock from "./StepBlock";

export default function Steps() {
  const data = [
    {
      heading: "Explore Our Collection",
      desc: "Discover a curated selection of products tailored to your lifestyle. From trending items to timeless classics, our collection is designed to inspire and enhance your everyday moments.",
    },
    {
      heading: "Add to Cart with Ease",
      desc: `Found something you love? Simply click "Add to Cart" to secure your selection. Review your choices before proceeding to checkout.`,
    },
    {
      heading: "Secure Checkout Process",
      desc: "Complete your purchase through our secure and user-friendly checkout process.",
    },
    {
      heading: "Enjoy Your New Find",
      desc: "Unbox happiness! Receive your carefully packaged order and enjoy the quality and uniqueness that SwiftCart brings to you.",
    },
  ];

  const steps = data.map((item, i) => (
    <StepBlock key={i + 1} heading={item.heading} desc={item.desc} />
  ));

  return (
    <section className="pt-9 px-2">
      <h2 className="mb-8 sm:text-lg">How It works</h2>
      <div className="flex flex-col gap-8">{steps}</div>
      <button className="mt-9 bg-hero-desc text-white px-3 py-2 text-sm sm:text-base">
        Start Exploring &rarr;
      </button>

      <p className="text-sm sm:text-base my-10 sm:my-12">
        <strong>Note:</strong> Orders are processed via Mail and Whatsapp.
      </p>
    </section>
  );
}
