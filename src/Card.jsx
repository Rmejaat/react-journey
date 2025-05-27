import { REACT_CARDS } from "@/src/react-cards";
import { BookOpenText, PlusCircle } from "lucide-react";
import {} from "module";
import Link from "next/link";
import { Button } from "./header/button";
import { ReactSvg } from "./header/reactsvg";

export const Card = ({ currentFilter }) => {
  return (
    <>
      {REACT_CARDS.filter((card) =>
        currentFilter === "" ? true : card.category === currentFilter
      ).map((card) => (
        <CardItem
          key={card.name}
          cardName={card.name}
          cardCategory={card.category}
          cardUrl={card.url}
          currentFilter={currentFilter}
        />
      ))}
    </>
  );
};

const CardItem = ({ cardName, cardCategory, cardUrl, currentFilter }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-100">
      <div className="flex w-full items-center gap-2">
        <ReactSvg size={24} />
        <p className="text-base font-bold">React</p>
      </div>
      <p className="line-clamp-1 w-full overflow-hidden text-ellipsis text-center text-lg font-extrabold">
        {cardName}
      </p>
      <div className="flex w-full items-center gap-2">
        <p
          className="line-clamp-1 text-start text-xs text-gray-400"
          hidden={currentFilter != ""}
        >
          {cardCategory}
        </p>
        <Link
          href={cardUrl}
          className="inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring bg-gray-200 text-gray-950 hover:bg-gray-300 h-8 text-sm font-semibold ml-auto"
        >
          <BookOpenText size={16} />
        </Link>
        <Button>
          <PlusCircle size={16} />
        </Button>
      </div>
    </div>
  );
};
