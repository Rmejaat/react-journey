import { ShoppingBasket, User } from "lucide-react";
import { ButtonSvg } from "./buttonsvg";

export const HeaderRight = () => {
  return (
    <div className="ml-auto flex items-center gap-4">
      <ButtonSvg>
        <ShoppingBasket />
      </ButtonSvg>
      <ButtonSvg>
        <User />
      </ButtonSvg>
    </div>
  );
};
