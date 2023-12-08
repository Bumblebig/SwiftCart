export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-hero-desc text-white text-center pt-16 pb-10 px-5">
      <div className="flex items-center justify-center flex-wrap gap-4 mb-6">
        <a href="#" className="text-sm sm:text-base">
          Facebook
        </a>
        <a href="#" className="text-sm sm:text-base">
          Instagram
        </a>
        <a href="#" className="text-sm sm:text-base">
          Twitter
        </a>
        <a href="#" className="text-sm sm:text-base">
          Whatsapp
        </a>
      </div>
      <p className="text-xs sm:text-sm">&copy; SwiftCart {year}</p>
    </footer>
  );
}
