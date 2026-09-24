import { Search } from "lucide-react";

type FilterProps = {
  title: string;
  placeholder: string;
};

const Filter = (props: FilterProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#00A2F7] font-[700] text-xl mt-10 ">
        {props.title}
      </p>
      <p className="text-[#00A2F7] font-[400] text-xs">
        {props.placeholder}
      </p>

      <div className="flex gap-2 items-center mt-2">
        <input
          type="text"
          placeholder="Curso de React"
          className="bg-white border-[#F2F2F2] rounded-md w-[615px] h-[35px] text-xs px-2"
        />
        <div className=" h-[35px] w-[35px] flex justify-center items-center rounded-md bg-[#E1F4FF]">
          <Search size={16} className="text-[#00A2F7]" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
