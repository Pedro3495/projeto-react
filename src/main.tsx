import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Filter from './components/Filter.tsx'
import Card from './components/Card.tsx'
import Info from './components/Info.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col bg-[#F4FBFF] h-screen ">
      <Header />
      <main className="flex-1 max-w-[1200px] m-auto w-full">
        <Filter
          title="Busque o conteúdo que deseja assistir hoje"
          subtitle="Conteúdo exclusivo todos os dias"
          placeholder="Busque seu curso"
        />
        <div className="bg-white rounded-md py-2 mt-2">
          <p className="text-[#00A2F7] font-bold text-center text-xl ">
            Os cursos mais buscados
          </p>
          <div className="grid grid-cols-4 gap-20 mt-3">
            <Card
              title="Fundamentos do React.js"
              cargaHoraria="9h"
              img="src/assets/react.png"
            />
            <Card
              title="Fundamentos do Node.js"
              cargaHoraria="9h"
              img="src/assets/node.png"
            />
            <Card
              title="Fundamentos do Next.js"
              cargaHoraria="9h"
              img="src/assets/Next.png"
            />
            <Card
              title="Fundamentos do TailwindCSS"
              cargaHoraria="9h"
              img="src/assets/TailwindCSS.png"
            />
          </div>
        </div>
        <Info />
      </main>
      <Footer />
    </div>
  </StrictMode>,
);
