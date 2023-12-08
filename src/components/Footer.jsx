export default function Footer(){
    const year = (new Date()).getFullYear();

    return(
        <footer className="bg-hero-desc text-white text-center pt-10 pb-8 px-5">
            <div className="flex items-center justify-center flex-wrap gap-4 mb-4">
                <a href="#" className="text-sm">Facebook</a>
                <a href="#" className="text-sm">Instagram</a>
                <a href="#" className="text-sm">Twitter</a>
                <a href="#" className="text-sm">Whatsapp</a>
            </div>
            <p className="text-xs">&copy; SwiftCart {year}</p>
        </footer>
    )
}