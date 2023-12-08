export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-hero-desc text-white text-center pt-16 pb-10 px-5 lg:pt-20 lg:pb-12 lg:px-8">
      <div className="flex items-center justify-center flex-wrap gap-4 mb-6">
        <a
          href="#"
          className="text-sm sm:text-base lg:text-lg lg:cursor-pointer"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-sm sm:text-base lg:text-lg lg:cursor-pointer"
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-sm sm:text-base lg:text-lg lg:cursor-pointer"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-sm sm:text-base lg:text-lg lg:cursor-pointer"
        >
          Whatsapp
        </a>
      </div>
      <p className="text-xs sm:text-sm lg:text-base">&copy; SwiftCart {year}</p>
    </footer>
  );
}
