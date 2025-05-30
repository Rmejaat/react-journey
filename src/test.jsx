import { Link } from "lucide-react";

export const Test = () => {
  return (
    <Link className="relative rounded-8 block " href="">
      <div className="p-6 rounded-8 relative overflow-hidden">
        <Image className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="relative z-10 flex flex-col text-center items-center"></div>
      </div>
    </Link>
  );
};
