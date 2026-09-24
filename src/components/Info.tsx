const Info = () => {
  return (
    <div className="mt-6 flex items-center w-full justify-between">
      <div className="flex flex-col gap-2 text-[#00A2F7]">
        <p className="font-bold">Pratique com projetos reais</p>
        <p className="w-[700px] text-sm">
          Em vez de apenas ensinar teoria, focamos em código real para inspirar
          seu próximo projeto. Aprender não precisa ser chato.
        </p>
        <button className="w-[150px] h-8 text-white rounded-md cursor-pointer">
          Ver biblioteca
        </button>
      </div>
      <div className="flex flex-col gap-1 bg-white text-[#00A2F7] rounded-md p-2 ">
        <p className="font-bold text-md">Curso rápido</p>
        <p className="text-sm">Cursos práticos de curta duração</p>
        <button className="w-36 border py-1 p-2 rounded-md cursor-pointer bg-white text-[#00A2F7]">
          Assistir
        </button>
      </div>
    </div>
  );
}
export default Info;
