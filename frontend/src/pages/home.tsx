import {
  Activity,
  ArrowRight,
  Brain,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import NewsLetter from "../features/newsletter";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Brain className="text-violet-600" size={32} />,
    bg: "bg-violet-50 border-violet-100",
    title: "AI-Powered Diagnostics",
    desc: "Advanced neural networks analyze your symptoms instantly to provide preliminary insights.",
  },
  {
    icon: <Activity className="text-teal-600" size={32} />,
    bg: "bg-teal-50 border-teal-100",
    title: "Real-time Monitoring",
    desc: "Keep track of your vitals and health trends with our continuous monitoring dashboard.",
  },
  {
    icon: <ShieldCheck className="text-blue-600" size={32} />,
    bg: "bg-blue-50 border-blue-100",
    title: "Secure & Private",
    desc: "Your health data is encrypted and protected with enterprise-grade security standards.",
  },
];

const stats = [
  { value: "10k+", label: "Checkups Completed" },
  { value: "99%", label: "System Uptime" },
  { value: "24/7", label: "AI Availability" },
];

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white pb-16 pt-24 lg:pb-32 lg:pt-32">
        <div className="absolute top-0 left-1/2 -ml-160 w-440 h-200 opacity-20 bg-linear-to-tr from-teal-200 to-blue-200 blur-3xl rounded-[50%]" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Sparkles size={16} />
                <span>Powered by Next-Gen AI</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Smart Healthcare <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Decoded by AI
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience the future of medical diagnostics. Our AI-driven
                platform helps you understand your symptoms, track your health,
                and find the right care instantly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/check-symptoms"
                  className="group relative px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-semibold shadow-lg shadow-teal-200 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3"
                >
                  <Stethoscope size={20} />
                  Start Free Checkup
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-semibold transition-colors flex items-center gap-2">
                  How it works
                </button>
              </div>

              {/* Stats Mini Bar */}
              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 lg:gap-12 text-center lg:text-left border-t border-slate-100 mt-8">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-500 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image/Graphic area */}
            <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
              <div className="relative">
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] flex items-center justify-center group">
                  <img
                    src="/medical_ai_hero.png" // We will ensure this path is correct
                    alt="AI Health Interface"
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Floating UI Card Overlay Example */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Activity size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        System Status
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        AI Analysis Active
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Online
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Healthcare reimagined with Intelligence
            </p>
            <p className="mt-4 text-slate-600 text-lg">
              We combine advanced machine learning with medical expertise to
              provide accurate, instant, and personalized health insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className={`group p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.bg} bg-opacity-30 border-opacity-50 hover:bg-opacity-50`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                <div className="mt-6 flex items-center text-sm font-semibold text-slate-900 opacity-60 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter / CTA Section */}
      <div className="bg-slate-50 py-20 pb-20">
        <NewsLetter />
      </div>
    </div>
  );
}

export default Home;
