import vid from "../assets/SwiftCart.mp4";

export default function About() {
  return (
    <section className="px-5 pt-6 pb-10 sm:px-7 xl:px-10">
      <h2 className="mb-8 font-bold sm:text-lg lg:mb-14 xl:text-2xl 2xl:mb-12">
        About SwiftCart
      </h2>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="mx-auto h-auto w-2/3 max-w-xs"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className="mt-16 mb-8 text-sm text-gray-800 leading-normal sm:text-base sm:w-5/6 md:w-3/4 xl:text-xl">
        Welcome to SwiftCart, where we turn shopping into an experience. At
        SwiftCart, we're not just an online store – we're a community, a
        passion, and a commitment to delivering quality products that enhance
        your lifestyle.
      </p>

      <div className="flex flex-col gap-8 sm:w-5/6 md:w-3/4">
        <div>
          <h4 className="mb-2 xl:text-2xl">Our Story</h4>
          <p className="text-sm text-gray-800 leading-normal sm:text-base xl:text-xl">
            SwiftCart started with a simple idea: to create a space where
            finding exceptional products is as exciting as owning them. Our
            journey is one of exploration, discovery, and a relentless pursuit
            of the extraordinary. Every product in our collection has a story, a
            purpose, and a commitment to quality.
          </p>
        </div>

        <div>
          <h4 className="mb-2 xl:text-2xl">Mission</h4>
          <p className="text-sm text-gray-800 leading-normal sm:text-base xl:text-xl">
            Our mission is to provide you with a curated selection of products
            that not only meet your needs but inspire you. We aim to create an
            online shopping experience that is convenient, enjoyable, and goes
            beyond the transaction.
          </p>
        </div>

        <div>
          <h4 className="mb-2 xl:text-2xl">Values</h4>
          <li className="text-sm text-gray-800 leading-normal list-none sm:text-base xl:text-xl">
            <strong>- Quality:</strong> We stand by the quality of our products.
          </li>
          <li className="text-sm text-gray-800 leading-normal list-none sm:text-base xl:text-xl">
            <strong>- Innovation:</strong> Embracing new ideas to bring you the
            latest trends.
          </li>
          <li className="text-sm text-gray-800 leading-normal list-none sm:text-base xl:text-xl">
            <strong>- Community:</strong> Building a community of like-minded
            individuals.
          </li>
        </div>

        <div>
          <h4 className="mb-2 xl:text-2xl">What Sets Us Apart</h4>
          <li className="text-sm text-gray-800 leading-normal list-none sm:text-base xl:text-xl">
            <strong>- Handpicked Selection:</strong> Our team meticulously
            selects each product for its uniqueness and quality.
          </li>
          <li className="text-sm text-gray-800 leading-normal list-none sm:text-base xl:text-xl">
            <strong>- Customer-centric Approach:</strong> Your satisfaction is
            our priority. We're here to assist you every step of the way.
          </li>
          <li className="text-sm text-gray-800 leading-normal list-none sm:text-base xl:text-xl">
            <strong>- Inclusive Collections:</strong> From everyday essentials
            to exclusive finds, we cater to diverse tastes.
          </li>
        </div>

        <div>
          <h4 className="mb-2 xl:text-2xl">Get in Touch</h4>
          <p className="text-sm text-gray-800 leading-normal sm:text-base xl:text-xl">
            We love hearing from our community! Whether you have a question,
            feedback, or just want to say hello, feel free to reach out to us.
          </p>
        </div>
      </div>

      <button className="mt-9 bg-hero-desc w-max text-center mx-auto text-white px-3 py-2 text-sm sm:text-base xl:text-xl xl:mt-16">
        Contact Us &rarr;
      </button>
    </section>
  );
}
