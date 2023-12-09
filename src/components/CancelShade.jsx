import { useSharedState } from "./SharedNavState";

export default function CancelShade() {
  const { isMobileNavVisible, toggleMobileNav } = useSharedState();

  return (
    <div
      className={`w-full h-full overflow-hidden fixed top-0 z-10 backdrop-blur-sm bg-shade ${
        isMobileNavVisible ? "visible" : "hidden"
      }`}
      onClick={() => toggleMobileNav()}
    ></div>
  );
}
