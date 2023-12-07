import Sneakers from '../assets/sneakers.jpg'

export default function CategoryCard() {
    // const imgPath = 'sneakers.jpg'
    const style ={ 
        backgroundImage: `linear-gradient(180deg, rgba(4,4,4,0.27494747899159666) 58%, rgba(4,4,4,0.6867121848739496) 88%), url("${Sneakers}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    }
    return (
        <figure className="w-11/12 h-56  flex flex-col items-center justify-end p-3" style={style}>
            <div>
                <p className="text-white text-center text-base font-bold">Sneakers</p>
                <button className="mt-3 bg-hero-desc text-white px-3 py-2 text-sm">Shop now &rarr;</button>
            </div>
        </figure>
    )
}