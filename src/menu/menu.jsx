import clsx from "clsx";
import Link from "next/link";

export const Menu = ({ filters, currentFilter }) => {
  return (
    <aside className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <MenuItem isActive={!filters} filter="" key="All">
        All
      </MenuItem>
      {filters.map((filter) => (
        <MenuItem
          filter={filter}
          key={filter}
          isActive={filter === currentFilter}
        >
          {filter}
        </MenuItem>
      ))}
    </aside>
  );
};

const MenuItem = ({ children, filter, isActive }) => {
  return (
    <Link
      href={`/?filters=${filter}`}
      key={filter}
      className={clsx(
        "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
        {
          "font-bold": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};
