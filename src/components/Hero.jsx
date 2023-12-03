import heroBag from "../assets/hero-bag.png";

export default function Hero(){
    return (
        <header>
            <figure className="w-11/12 max-w-xl mx-auto mt-8 rounded-md bg-hero-cream flex justify-between items-center p-5">
                <div>
                    <h1 className="text-hero-heading text-xl font-bold mb-2">Discover Unique Products Online</h1>
                    <p className="text-hero-desc text-sm">Your One-Stop Shop for Quality Goods.</p>
                </div>
                <img src={heroBag} alt="shopping-bags" className="w-40"/>
            </figure>
        </header>
    )
}