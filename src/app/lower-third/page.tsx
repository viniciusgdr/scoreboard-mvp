"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MyWindowPortal } from "../portal";
import { Inter } from 'next/font/google';

type Props = {
  upperTitle: string;
  mainTitle: string;
  photo: string;
  fullScreen: boolean;
  showClock: boolean;
  showUpperTitle: boolean;
  showMainTitle: boolean;
  showPhoto: boolean;
};

const inter = Inter({ subsets: ['latin'] })

function MakeLowerThird({
  upperTitle,
  mainTitle,
  photo,
  fullScreen,
  showClock,
  showUpperTitle,
  showMainTitle,
  showPhoto,
}: Props) {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={
        "flex flex-col  " + (fullScreen ? "min-h-screen bg-blue-500 " : "h-96 bg-gray-800") + " justify-end p-8 " + inter.className
      }
    >
      <div className="flex flex-col">
        <div className='flex flex-row'>
          <div className={`flex justify-center items-center bg-orange-600 w-24 h-7 text-center transition-all duration-500 ease-in-out ${showClock ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} style={{ 
            backgroundColor: '#ea580c'
           }}>
            <span className="text-white font-bold text-lg">
              {currentTime}
            </span>
          </div>
          <div className={`bg-blue-900 pr-12 pl-4 py-2 h-7 flex items-center transition-all duration-500 ease-in-out ${showUpperTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} style={{ 
            backgroundColor: '#1e3a8a'
           }}>
            <span className="text-white font-semibold text-base uppercase tracking-wide">
              {upperTitle}
            </span>
          </div>
        </div>
        <div className='flex flex-row'>
          {photo && (
            <div className={`transition-all duration-500 ease-in-out ${showPhoto ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              <Image
                src={photo}
                alt="Background"
                width={1920}
                height={1080}
                className="aspect-video w-24 h-16 p-1 bg-white/90 shadow-lg object-cover"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }}
              />
            </div>
          )}
          <div className={`bg-white/90 pl-3 flex justify-center items-center border-b-2 border-b-blue-900 shadow-b-lg rounded-b-sm transition-all duration-700 ease-in-out origin-left ${showMainTitle ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)'
          }}>
            <h2 className="text-[#052e16] text-xl font-bold leading-tight w-[36rem] max-w-xl" style={{
              color: '#052e16',
            }}>
              {mainTitle}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LowerThirdPage() {
  // Controls
  const [upperTitle, setUpperTitle] = useState("MAIS DE 30 HOMENS CAÍRAM NO GOLPE");
  const [mainTitle, setMainTitle] = useState("PRESOS SE PASSANDO POR MULHERES EM APLICATIVO DE RELACIONAMENTO PARA EXTORQUIR VÍTIMAS");
  const [photo, setPhoto] = useState("");

  // Copy states for updates
  const [upperTitleCopy, setUpperTitleCopy] = useState("MAIS DE 30 HOMENS CAÍRAM NO GOLPE");
  const [mainTitleCopy, setMainTitleCopy] = useState("PRESOS SE PASSANDO POR MULHERES EM APLICATIVO DE RELACIONAMENTO PARA EXTORQUIR VÍTIMAS");
  const [photoCopy, setPhotoCopy] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kyk8eaCDPNEHM85zmN0PeodTbqEl1naWGw&s");

  // Animation states
  const [showClock, setShowClock] = useState(true);
  const [showUpperTitle, setShowUpperTitle] = useState(true);
  const [showMainTitle, setShowMainTitle] = useState(true);
  const [showPhoto, setShowPhoto] = useState(true);

  const [showPortal, setShowPortal] = useState(false);

  // Function to show all elements
  const showAll = () => {
    setShowClock(true);
    setShowUpperTitle(true);
    setShowMainTitle(true);
    setShowPhoto(true);
  };

  // Function to hide all elements
  const hideAll = () => {
    setShowClock(false);
    setShowUpperTitle(false);
    setShowMainTitle(false);
    setShowPhoto(false);
  };

  // Function to animate entrance
  const animateEntrance = () => {
    hideAll();
    setTimeout(() => setShowClock(true), 200);
    setTimeout(() => setShowUpperTitle(true), 700);
    setTimeout(() => setShowPhoto(true), 1200);
    setTimeout(() => setShowMainTitle(true), 1700);
  };

  // Function to animate exit
  const animateExit = () => {
    setShowMainTitle(false);
    setTimeout(() => setShowPhoto(false), 500);
    setTimeout(() => setShowUpperTitle(false), 1000);
    setTimeout(() => setShowClock(false), 1500);
  };

  return (
    <div className="flex flex-col p-24 bg-slate-600 min-h-screen">
      {/* Preview */}
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold mb-4">Lower Third Preview</h1>
        <MakeLowerThird
          upperTitle={upperTitle}
          mainTitle={mainTitle}
          photo={photo}
          fullScreen={false}
          showClock={showClock}
          showUpperTitle={showUpperTitle}
          showMainTitle={showMainTitle}
          showPhoto={showPhoto}
        />
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4 bg-slate-700 rounded-xl p-6">
        <div className="flex flex-row gap-4 mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => {
              setUpperTitle(upperTitleCopy);
              setMainTitle(mainTitleCopy);
              setPhoto(photoCopy);
            }}
          >
            Atualizar Lower Third
          </button>

          {/* Animation Controls */}
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={animateEntrance}
          >
            Animar Entrada
          </button>

          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={animateExit}
          >
            Animar Saída
          </button>

          <button
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            onClick={showAll}
          >
            Mostrar Tudo
          </button>

          <button
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={hideAll}
          >
            Esconder Tudo
          </button>
        </div>

        {/* Individual Element Controls */}
        <div className="flex flex-row gap-4 mb-6 bg-slate-800 p-3 rounded">
          <button
            className={`px-3 py-1 rounded ${showClock ? 'bg-blue-500' : 'bg-gray-500'}`}
            onClick={() => setShowClock(!showClock)}
          >
            {showClock ? 'Esconder Hora' : 'Mostrar Hora'}
          </button>

          <button
            className={`px-3 py-1 rounded ${showUpperTitle ? 'bg-blue-500' : 'bg-gray-500'}`}
            onClick={() => setShowUpperTitle(!showUpperTitle)}
          >
            {showUpperTitle ? 'Esconder Título Superior' : 'Mostrar Título Superior'}
          </button>

          <button
            className={`px-3 py-1 rounded ${showPhoto ? 'bg-blue-500' : 'bg-gray-500'}`}
            onClick={() => setShowPhoto(!showPhoto)}
          >
            {showPhoto ? 'Esconder Logo' : 'Mostrar Logo'}
          </button>

          <button
            className={`px-3 py-1 rounded ${showMainTitle ? 'bg-blue-500' : 'bg-gray-500'}`}
            onClick={() => setShowMainTitle(!showMainTitle)}
          >
            {showMainTitle ? 'Esconder Título Principal' : 'Mostrar Título Principal'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Controls */}
          <div className="flex flex-col gap-4 bg-slate-500 rounded-lg p-4">
            <h2 className="text-white font-semibold text-lg">Controles de Texto</h2>

            <div>
              <label className="text-white block mb-2">Título Superior (Vermelho)</label>
              <input
                type="text"
                className="w-full p-2 rounded border"
                placeholder="Título superior"
                value={upperTitleCopy}
                onChange={(e) => setUpperTitleCopy(e.target.value)}
              />
            </div>

            <div>
              <label className="text-white block mb-2">Título Principal</label>
              <textarea
                className="w-full p-2 rounded border h-20 resize-none"
                placeholder="Título principal da notícia"
                value={mainTitleCopy}
                onChange={(e) => setMainTitleCopy(e.target.value)}
              />
            </div>
          </div>

          {/* Image Controls */}
          <div className="flex flex-col gap-4 bg-slate-500 rounded-lg p-4">
            <h2 className="text-white font-semibold text-lg">Controles de Imagem</h2>

            <div>
              <label className="text-white block mb-2">URL da Imagem de Fundo</label>
              <input
                type="text"
                className="w-full p-2 rounded border"
                placeholder="https://exemplo.com/imagem.jpg"
                value={photoCopy}
                onChange={(e) => setPhotoCopy(e.target.value)}
              />
            </div>

            <div>
              <label className="text-white block mb-2">Ou carregar arquivo</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 rounded border bg-white"
                onChange={(e) => {
                  if (!e.target.files || e.target.files.length === 0) return;
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setPhotoCopy(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </div>

            {photoCopy && (
              <div>
                <label className="text-white block mb-2">Preview da Imagem</label>
                <div className="relative w-full h-32 rounded border overflow-hidden">
                  <Image
                    src={photoCopy}
                    alt="Preview"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Portal Controls */}
        <div className="flex flex-row gap-4 pt-4 border-t border-slate-600">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => setShowPortal((prev) => !prev)}
          >
            {showPortal ? "Fechar Janela" : "Abrir em Nova Janela"}
          </button>
        </div>
      </div>

      {/* Portal */}
      {showPortal && (
        <MyWindowPortal>
          <MakeLowerThird
            upperTitle={upperTitle}
            mainTitle={mainTitle}
            photo={photo}
            fullScreen={true}
            showClock={showClock}
            showUpperTitle={showUpperTitle}
            showMainTitle={showMainTitle}
            showPhoto={showPhoto}
          />
        </MyWindowPortal>
      )}
    </div>
  );
}
