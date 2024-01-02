import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-full h-full absolute bg-transparent top-0 left-0 z-50">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#bb9457"
        ariaLabel="tail-spin-loading"
        radius="3"
        wrapperClass="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      />
    </div>
  );
}
