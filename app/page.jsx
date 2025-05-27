import { CardFilters } from "@/src/Card";
import { Menu } from "@/src/menu/menu";
import { REACT_CARDS } from "@/src/react-cards";
import { Header } from "../src/header/header";

export default async function Home({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const currentFilter = resolvedSearchParams.filters;
  const filters = [...new Set(REACT_CARDS.map((c) => c.category))];

  console.log({ currentFilter, filters });

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <Menu currentFilter={currentFilter} filters={filters} />
        <div className="size-full overflow-auto">
          <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CardFilters currentFilter={currentFilter} />
          </div>
        </div>
      </div>
    </main>
  );
}
