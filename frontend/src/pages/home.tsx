import { Heart, ScanHeart, Sparkles, TrendingUp, Zap } from "lucide-react";
import NewsLetter from "../features/newsletter";

const features = [
  {
    icon: <Sparkles color="#7F22FE" size={25} />,
    bg: "bg-violet-100",
    title: "Smart AI Assistance",
    desc: "Use our A.I. to figure out what to do",
  },
  {
    icon: <Heart color="#E11D48" size={25} />,
    bg: "bg-rose-100",
    title: "Health Monitoring",
    desc: "Track symptoms, vitals, and health changes",
  },
  {
    icon: <TrendingUp color="#0E7490" size={25} />,
    bg: "bg-cyan-100",
    title: "Progress & Trends",
    desc: "Get insights about your health over time",
  },
];

function Home() {
  return (
    <div className="min-h-screen ">
      {/* hero */}
      <div className="bg-red-100 h-full py-20 ">
        <div className="container mx-auto py-28 text-center  space-y-3 ">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl mx-auto">
            When something feels off, Health Check it
          </h1>

          <p className="text-sm md:text-lg font-semibold">
            We help people figure out health issues and find the right care
          </p>

          <button className="bg-white mt-12 rounded-2xl px-4 py-2 mx-auto border border-slate-300 flex items-center  gap-2 font-medium text-sm cursor-pointer hover:text-red-700">
            <ScanHeart
              className="text-white bg-red-600 rounded-full p-1"
              size={24}
              strokeWidth={3}
            />
            Check about symptoms
          </button>
        </div>
      </div>

      {/* features */}
      <div className="space-y-9  overflow-hidden py-10">
        <div className="flex items-center gap-2 text-red-800 bg-red-400/10 border border-red-200 rounded-full px-4 py-1 w-max mx-auto">
          <Zap className="text-red-800" size={18} />
          <span>Here's how we help:</span>
        </div>

        {/* features display */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pb-18 ">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className={`p-4 aspect-square ${item.bg} rounded-full flex items-center justify-center`}>
                {item.icon}
              </div>

              <div className="mt-5 space-y-2 text-center">
                <h3 className="text-base font-semibold text-slate-700">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsLetter />
    </div>
  );
}

export default Home;
