"use client";
import { useEffect, useRef, useState } from "react";
import { MyWindowPortal } from "../portal";

type Props = {
  title: string;
  team1: string;
  team2: string;
  flag1: string;
  flag2: string;
  score1: number;
  score2: number;
  time: Date;
  half: number;
  elapsed: Date;
  extra: number;
  fullScreen: boolean;
  color1: string;
  color2: string;
  startTimeExtra: number;
  showLogo: boolean;
  showTexts: boolean;
  showTime: boolean;
};
function MakePanel({
  title,
  team1,
  team2,
  flag1,
  flag2,
  score1,
  score2,
  time,
  half,
  elapsed,
  extra,
  fullScreen,
  color1,
  color2,
  startTimeExtra,
  showLogo,
  showTexts,
  showTime
}: Props) {
  return (
    <div
      className={
        "flex flex-col bg-sky-500 " + (fullScreen ? "min-h-screen" : "")
      }
    >
      <div className="flex flex-col gap-0.5 p-24">
        <div className={`bg-boardLime max-w-max px-4 transition-all duration-700 ease-in-out transform ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <span className="text-white font-extralight">{title}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className={`flex flex-row w-20 transition-all duration-500 ease-in-out transform ${showTexts ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="bg-boardWhite flex flex-row gap-2 items-center pr-1.5">
              <div
                className={"w-4 h-full"}
                style={{ backgroundColor: color1 }}
              ></div>
              <span className="text-xl w-16">{team1}</span>
              <img src={flag1} alt="Brazil" className="w-[30px] h-5" />
            </div>
            <div className="bg-boardBlue px-3">
              <span className="text-white text-xl font-bold">{score1}</span>
            </div>
          </div>
          <div className={`flex flex-row w-20 transition-all duration-500 ease-in-out transform ${showTexts ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 -translate-x-20'}`}>
            <div className="bg-boardWhite flex flex-row gap-2 items-center pr-1.5">
              <div className={"w-4 h-full"} style={{ backgroundColor: color2 }}></div>
              <span className="text-xl w-16">{team2}</span>
              <img src={flag2} alt="Spain" className="w-[30px] h-5" />
            </div>
            <div className="bg-boardBlue px-3">
              <span className="text-white text-xl font-bold">{score2}</span>
            </div>
          </div>
          <div className={`flex flex-row gap-0.5 transition-all duration-500 ease-in-out transform ${showTime ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-boardWhite px-3">
              <span className="text-[#013951] text-xl font-semibold">
                {
                  time.getMinutes() < startTimeExtra ? time.toLocaleTimeString("pt-BR", {
                      second: "2-digit",
                      minute: "2-digit",
                    })
                  : `${
                    startTimeExtra.toString().padStart(2, "0")
                  }:00`
                }
              </span>
            </div>
            <div className="bg-boardLime px-3">
              <span className="text-white text-xl font-light">{half}st</span>
            </div>
            {
              time.getMinutes() >= startTimeExtra && (
                <div className="bg-boardBlack px-3">
                  <span className="text-white text-xl font-bold">
                    {elapsed.toLocaleTimeString("pt-BR", {
                      second: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              )
            }
          </div>
          {extra > 0 && (
            <div className={`flex flex-row gap-0.5 transition-all duration-500 ease-in-out transform ${showTime ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-boardBlue text-xl text-white px-3">
                +{extra}
                <span className="bg-boardBlue text-[15px] text-white">
                  MINS
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const esp =
  "data:image/png;base64,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";
export default function Page() {
  // controls
  const [running, setRunning] = useState(false);

  const [title, setTitle] = useState("Semi-Final");
  const [team1, setTeam1] = useState("BRA");
  const [color1, setColor1] = useState("#013951");
  const [color2, setColor2] = useState("#FF0000");
  const [team2, setTeam2] = useState("ESP");
  const [flag1, setFlag1] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
  );
  const [flag2, setFlag2] = useState(esp);

  const [score1, setScore1] = useState(1);
  const [score2, setScore2] = useState(1);
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [half, setHalf] = useState(1);
  const [elapsed, setElapsed] = useState(new Date(0, 0, 0, 0, 0, 0))
  const [extra, setExtra] = useState(4);
  const [startTimeExtra, setStartTimeExtra] = useState(45);

  // Estados para controlar as animações
  const [showLogo, setShowLogo] = useState(true);
  const [showTexts, setShowTexts] = useState(true);
  const [showTime, setShowTime] = useState(true);

  // COPY
  const [titleCopy, setTitleCopy] = useState("Semi-Final");
  const [team1Copy, setTeam1Copy] = useState("BRA");
  const [color1Copy, setColor1Copy] = useState("#013951");
  const [color2Copy, setColor2Copy] = useState("#FF0000");
  const [team2Copy, setTeam2Copy] = useState("ESP");
  const [flag1Copy, setFlag1Copy] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
  );
  const [flag2Copy, setFlag2Copy] = useState(esp);

  const [score1Copy, setScore1Copy] = useState(1);
  const [score2Copy, setScore2Copy] = useState(1);
  const [halfCopy, setHalfCopy] = useState(1);
  const [extraCopy, setExtraCopy] = useState(4);
  const [startTimeExtraCopy, setStartTimeExtraCopy] = useState(45);


  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTime((prev) => {
          const next = new Date(prev);
          next.setSeconds(next.getSeconds() + 1);
          return next;
        });
        if (time.getMinutes() >= startTimeExtra) {
          setElapsed((prev) => {
            const next = new Date(prev);
            next.setSeconds(next.getSeconds() + 1);
            return next;
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [running, startTimeExtra, time]);

  const [showPortal, setShowPortal] = useState(false);

  return (
    <div className="flex flex-col p-24 bg-sky-500">
      <MakePanel
        title={title}
        team1={team1}
        team2={team2}
        flag1={flag1}
        flag2={flag2}
        score1={score1}
        score2={score2}
        time={time}
        half={half}
        elapsed={elapsed}
        extra={extra}
        fullScreen={false}
        color1={color1}
        color2={color2}
        startTimeExtra={startTimeExtra}
        showLogo={showLogo}
        showTexts={showTexts}
        showTime={showTime}
      ></MakePanel>
      <div className="flex flex-col gap-4 bg-slate-700 rounded-xl p-6">
        <button
          className="bg-boardBlue text-white px-4 py-2"
          onClick={() => {
            setTitle(titleCopy);
            setTeam1(team1Copy);
            setTeam2(team2Copy);
            setFlag1(flag1Copy);
            setFlag2(flag2Copy);
            setScore1(score1Copy);
            setScore2(score2Copy);
            setHalf(halfCopy);
            setExtra(extraCopy);
            setStartTimeExtra(startTimeExtraCopy);
            setColor1(color1Copy);
            setColor2(color2Copy);
          }}
        >
          Update
        </button>
        <div className="flex justify-between w-full gap-4">
          <div className="flex flex-col gap-4 bg-slate-400 rounded-lg p-3 w-full">
            <h2 className="text-white">Time A (Casa) - Controles</h2>
            <input
              type="text"
              placeholder="Time A"
              value={team1Copy}
              onChange={(e) => setTeam1Copy(e.target.value)}
            />
            <input
              type="text"
              placeholder="Flag A"
              value={flag1Copy}
              onChange={(e) => setFlag1Copy(e.target.value)}
            />
            <input
              type='file'
              accept='image/*'
              onChange={(e) => {
                if (!e.target.files || e.target.files.length === 0) return;
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFlag1Copy(reader.result as string);
                };
                reader.readAsDataURL(file);
              }}
            />
            <input
              type="number"
              placeholder="Score A"
              value={score1Copy}
              onChange={(e) => setScore1Copy(Number(e.target.value))}
            />
            <input
              type="color"
              value={color1Copy}
              onChange={(e) => setColor1Copy(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 bg-slate-400 rounded-lg p-3 w-full">
            <h2 className="text-white">Time B (Casa) - Controles</h2>
            <input
              type="text"
              placeholder="Time B"
              value={team2Copy}
              onChange={(e) => setTeam2Copy(e.target.value)}
            />
            <input
              type="text"
              placeholder="Flag B"
              value={flag2Copy}
              onChange={(e) => setFlag2Copy(e.target.value)}
            />
            <input
              type='file'
              accept='image/*'
              onChange={(e) => {
                if (!e.target.files || e.target.files.length === 0) return;
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFlag2Copy(reader.result as string);
                };
                reader.readAsDataURL(file);
              }}
            />
            <input
              type="number"
              placeholder="Score B"
              value={score2Copy}
              onChange={(e) => setScore2Copy(Number(e.target.value))}
            />
            <input
              type="color"
              value={color2Copy}
              onChange={(e) => setColor2Copy(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 bg-slate-400 rounded-lg p-3 w-full">
            <h2 className="text-white">Geral - Controles</h2>
            <p>
              Título
            </p>
            <input
              type="text"
              placeholder="Title"
              value={titleCopy}
              onChange={(e) => setTitleCopy(e.target.value)}
            />
            <button
              className="bg-boardBlue text-white px-4 py-2"
              onClick={() => setRunning((prev) => !prev)}
            >
              {running ? "Pause" : "Start"}
            </button>
            <button
              className="bg-boardBlue text-white px-4 py-2"
              onClick={() => {
                setRunning(false);
                setTime(new Date(0, 0, 0, 0, 0, 0));
                setElapsed(new Date(0, 0, 0, 0, 0, 0));
              }}
            >
              Reset
            </button>
            
            {/* Animações de Controle */}
            <div className="mt-4 border-t pt-2 border-gray-500">
              <h3 className="text-white font-bold">Animações</h3>
              <div className="flex flex-row gap-2 mt-2">
                <button
                  className={`px-3 py-1 rounded ${showLogo ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
                  onClick={() => setShowLogo(!showLogo)}
                >
                  {showLogo ? 'Esconder Logo' : 'Mostrar Logo'}
                </button>
                <button
                  className={`px-3 py-1 rounded ${showTexts ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
                  onClick={() => setShowTexts(!showTexts)}
                >
                  {showTexts ? 'Esconder Times' : 'Mostrar Times'}
                </button>
                <button
                  className={`px-3 py-1 rounded ${showTime ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
                  onClick={() => setShowTime(!showTime)}
                >
                  {showTime ? 'Esconder Relógio' : 'Mostrar Relógio'}
                </button>
              </div>
              <button
                className="bg-purple-600 text-white px-3 py-1 mt-2 rounded"
                onClick={() => {
                  // Sequência de animação
                  setShowLogo(false);
                  setShowTexts(false);
                  setShowTime(false);
                  
                  setTimeout(() => setShowLogo(true), 500);
                  setTimeout(() => setShowTexts(true), 1500);
                  setTimeout(() => setShowTime(true), 2500);
                }}
              >
                Executar Sequência
              </button>
            </div>
            
            <p className="mt-4">
              Tempo em que o cronômetro deve começar a contar o tempo extra
            </p>
            <input
              type="number"
              placeholder="Extra Time"
              value={startTimeExtraCopy}
              onChange={(e) => setStartTimeExtraCopy(Number(e.target.value))}
            />
            <p>
              Tempo Extra
            </p>
            <input
              type="number"
              placeholder="Extra Time"
              value={extraCopy}
              onChange={(e) => setExtraCopy(Number(e.target.value))}
            />
            <p>
              Tempo de Jogo
            </p>
            <input
              type="number"
              placeholder="Half"
              value={halfCopy}
              onChange={(e) => setHalfCopy(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <button
            className="bg-boardBlue text-white px-4 py-2"
            onClick={() => setShowPortal((prev) => !prev)}
          >
            {showPortal ? "Close Portal" : "Open in Portal"}
          </button>
        </div>
      </div>

      {showPortal && (
        <MyWindowPortal>
          <MakePanel
            title={title}
            team1={team1}
            team2={team2}
            flag1={flag1}
            flag2={flag2}
            score1={score1}
            score2={score2}
            time={time}
            half={half}
            elapsed={elapsed}
            extra={extra}
            fullScreen={true}
            color1={color1}
            color2={color2}
            startTimeExtra={startTimeExtra}
            showLogo={showLogo}
            showTexts={showTexts}
            showTime={showTime}
          ></MakePanel>
        </MyWindowPortal>
      )}
    </div>
  );
}

/*
 */
