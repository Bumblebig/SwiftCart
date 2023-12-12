import prodImage from "../assets/brown-sandals.jpg";

export default function CartItem() {
  return (
    <div className="flex flex-shrink-0 items-center gap-2 p-2 relative xl:gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-4 h-4 absolute right-1 top-1 cursor-pointer sm:w-5 sm:h-5 xl:w-6 xl:h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>

      <img src={prodImage} alt="product" className="w-24 h-auto rounded" />
      <div className="flex flex-col gap-1">
        <p className="text-sm sm:text-base xl:text-lg leading-tight">
          Bucanneer Sandals
        </p>
        <p className="text-xs sm:text-sm xl:text-base">
          <strong className="mr-1">Size: </strong> 40
        </p>
        <p className="text-xs sm:text-sm xl:text-base">
          <strong className="mr-1">Qty: </strong>
          <span className="cursor-pointer px-2 mr-3 bg-black text-white">
            -
          </span>{" "}
          <span>1</span>
          <span className="cursor-pointer px-2 ml-3 bg-black text-white">
            +
          </span>
        </p>
        <p className="font-bold">₦5000</p>
      </div>
    </div>
  );
}
