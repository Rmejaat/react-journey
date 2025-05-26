export const Menu = () => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <a className="rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200">
        All
      </a>
      <a className="rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200">
        Components
      </a>
      <a className="rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200">
        Hooks
      </a>
      <a className="rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200">
        State-Manager
      </a>
      <a className="rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200">
        Server
      </a>
      <a className="rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200">
        Patterns
      </a>
    </nav>
  );
};
