import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Filter from './components/Filter.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col bg-[#F4FBFF] h-screen ">
      <Header />
      <div className="flex-1 max-w-[1200px] m-auto w-full">
        <Filter
          title="Busque o conteúdo que deseja assistir hoje"
          placeholder="Conteúdo exclusivo todos os dias"
        />
      </div>
      <Footer />
    </div>
  </StrictMode>,
);
