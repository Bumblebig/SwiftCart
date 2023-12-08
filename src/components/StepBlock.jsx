export default function StepBlock({ heading, desc }) {
  return (
    <div className="text-center">
      <h4 className="mb-2 xl:text-2xl">{heading}</h4>
      <p className="text-sm text-gray-800 leading-normal sm:text-base xl:text-xl">
        {desc}
      </p>
    </div>
  );
}
