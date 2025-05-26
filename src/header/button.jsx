export const Button = ({ children }) => {
  return (
    <button className="inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring bg-transparent text-gray-950 hover:bg-gray-200 h-8 text-sm font-semibold">
      {children}
    </button>
  );
};
