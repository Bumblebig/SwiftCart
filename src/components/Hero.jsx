import heroBag from "../assets/hero-bag.png";

export default function Hero(){
    return (
        <header className="pb-12">
            <figure className="max-w-xl mx-auto mt-8 mb-10 rounded-md bg-hero-cream flex justify-between items-center p-5 pr-0">
                <div>
                    <h1 className="text-hero-heading text-xl font-bold mb-2">Discover Unique Products Online</h1>
                    <p className="text-hero-desc text-sm">Your One-Stop Shop for Quality Goods.</p>
                </div>
                <img src={heroBag} alt="shopping-bags" className="w-40"/>
            </figure>

            <p className="text-gray-800 leading-normal m-auto text-sm">Welcome to SwiftCart, where passion meets product. Our journey began with a vision to redefine the way you shop. Dive into a world of carefully curated items that reflect our commitment to quality, style, and innovation.</p>
             {/* <button className="mt-6 bg-gray-950 text-white px-3 py-2 text-sm rounded">Shop now &rarr;</button> */}
        </header>
    )
}