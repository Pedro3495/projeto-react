
type CardProps = {
  img: string;
  title: string;
  cargaHoraria: string;
}

const Card = ({title,cargaHoraria,img}: CardProps) => {
  return (
    <div className="border w-full p-4 rounded-md border-[#00A2F7] flex flex-col">
      <div className="f lex-1 justify-center items-center">
        <img src={img} className="w-18 mx-auto h-32 w-32" alt="" />
      </div>
      <p className="text-[#00A2F7] font-bold text-sm mt-2 ">{title}</p>
      <p className="text-[#00A2F7] text-sm mt-1">{cargaHoraria}</p>
      <button className="bg-[#00A2F7] text-white w-full text-sm py-1 rounded-sm cursor-pointer mt-1">
        Inscrever-se
      </button>
    </div>
  );
}

export default Card;
