export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-hero-desc text-white text-center pt-16 pb-10 px-5 lg:pt-20 lg:pb-12 lg:px-8 xl:pb-16 xl:pt-28">
      <div className="flex items-center justify-center flex-wrap gap-4 mb-6 xl:gap-6 xl:mb-12">
        <a
          href="#"
          className="text-sm sm:text-base lg:text-lg lg:cursor-pointer xl:text-xl hover:font-bold"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-sm sm:text-base lg:text-lg lg:cursor-pointer xl:text- hover:font-bold"
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-sm sm:text-base lg:text-lg lg:cursor-pointer xl:text-xl hover:font-bold"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-sm sm:text-base lg:text-lg lg:cursor-pointer xl:text-xl hover:font-bold"
        >
          Whatsapp
        </a>
      </div>
      <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
        &copy; SwiftCart {year}
      </p>
    </footer>
  );
}
