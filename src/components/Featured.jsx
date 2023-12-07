import ProductCard from "./ProductCard";

export default function Featured(){
    const items = [
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
        <ProductCard />,
    ];

    return(
        <section className="mb-9">
            <h2 className="mb-8">Featured Products</h2>

            <div className="w-full flex mx-auto featured-item overflow-x-auto gap-5 box-content">
                {items}
            </div>
        </section>
    )
}