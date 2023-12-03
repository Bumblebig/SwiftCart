import heroBag from "../assets/hero-bag.png";

export default function Hero(){
    return (
        <header>
            <figure className="w-11/12 max-w-xl mx-auto mt-8 rounded-md bg-hero-cream flex justify-between items-start p-5 gap-3">
                <div>
                    <h1 className="text-hero-heading text-2xl font-bold mb-4 leading-heading">Discover Unique Products Online</h1>
                    <p className="text-hero-desc text-md">Your One-Stop Shop for Quality Goods.</p>
                </div>
                <img src={heroBag} alt="shopping-bags" className="w-36"/>
            </figure>
        </header>
    )
}