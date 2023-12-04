import FeaturedItem from "./FeaturedItem";

export default function Featured(){
    const items = [
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
        <FeaturedItem />,
    ];

    return(
        <section>
            <h2 className="mb-8">Featured Products</h2>

            <div className="w-full flex mx-auto featured-item overflow-x-auto gap-5 box-content">
                {items}
            </div>
        </section>
    )
}