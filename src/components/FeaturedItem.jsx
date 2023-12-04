import prodImage from "../assets/brown-sandals.jpg";

export default function FeaturedItem(){
    return(
        <figure className="w-52">
            <img src={prodImage} alt="sandals" className="block w-full rounded-t-md" />
            <h3 className="price text-xl mt-6 px-2">#5,000.00</h3>
            <p className="text-sm text-gray-700 mt-1 px-2">Bucaneer Sandals</p>
        </figure>
    )
}