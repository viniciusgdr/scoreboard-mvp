import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Scoreboard & Lower Third MVP</h1>
        <div className="flex flex-col gap-4 max-w-md">
          <Link href="/scoreboard">
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              ⚽ Scoreboard (Placar)
            </button>
          </Link>
          <Link href="/lower-third">
            <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              📺 Lower Third (TV Graphics)
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
