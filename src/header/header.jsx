import { ShoppingBasket, User } from "lucide-react";
import { Button } from "./button";
import { ReactSvg } from "./reactsvg";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold text-black">
        <ReactSvg size={32} /> <span>ReactJourney</span>
      </h1>
      <div className="ml-auto flex items-center gap-4">
        <Button>
          <ShoppingBasket size={24} />
        </Button>
        <Button>
          <User size={24} />
        </Button>
      </div>
    </header>
  );
};
