import { Search } from "lucide-react";

// ? faz a propiedade placeholder ser opcional.
type FilterProps = {
  title: string;
  subtitle: string;
  placeholder?: string;
};

const Filter = ({title,subtitle,placeholder}: FilterProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#00A2F7] font-bold text-xl mt-10 ">{title}</p>
      <p className="text-[#00A2F7] font-normal text-xs">{subtitle}</p>

      <div className="flex gap-2 items-center mt-2">
        <input
          type="text"
          placeholder={placeholder}
          className="bg-white border-[#F2F2F2] rounded-md w-[615px] h-[35px] text-xs px-2"
        />
        <div className=" h-[35px] w-[35px] flex justify-center items-center rounded-md cursor-pointer bg-[#E1F4FF]">
          <Search size={16} className="text-[#00A2F7]" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
