import { HeaderRight } from "./HeaderRight";
import { ReactSvg } from "./reactsvg";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <ReactSvg size={32} />
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        ReactJourney
      </h1>
      <HeaderRight />
    </header>
  );
};
