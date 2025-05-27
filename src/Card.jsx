import { BookOpenText, PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./header/button";
import { ReactSvg } from "./header/reactsvg";

export const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-100">
      <div className="flex w-full items-center gap-2">
        <ReactSvg size={24} />
        <p className="text-base font-bold">React</p>
      </div>
      <p className="line-clamp-1 w-full overflow-hidden text-ellipsis text-center text-lg font-extrabold"></p>
      <div className="flex w-full items-center gap-2">
        <Link href="">
          <BookOpenText size={16} />
        </Link>
        <Button>
          <PlusCircle size={16} />
        </Button>
      </div>
    </div>
  );
};
