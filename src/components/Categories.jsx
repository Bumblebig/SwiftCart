import CategoryCard from './CategoryCard';

export default function Categories() {
    return (
        <section>
            <h2 className="mb-8">Categories</h2>
            <div className="m-auto flex flex-col items-center gap-4">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </section>
    )
}