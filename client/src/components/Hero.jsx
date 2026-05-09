import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 grid-bg overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium text-purple-400"
        style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)" }}>
        <Sparkles size={14} />
        AI-Powered Prompt Generation
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl">
        <span className="gradient-text">Generate Perfect</span>
        <br />
        <span className="text-white">AI Prompts Instantly</span>
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        Transform your ideas into expertly crafted AI prompts. Save time, boost
        productivity, and unlock the full potential of AI with intelligent prompt
        engineering.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a href="#generator"
          className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}>
          <Sparkles size={18} />
          Start Generating
        </a>
        <a href="#how-it-works"
          className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:bg-white/10"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
          View Examples
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Floating cards decoration */}
      <div className="mt-20 w-full max-w-3xl relative">
        <div className="absolute inset-0 rounded-2xl"
          style={{ background: "linear-gradient(180deg, transparent, #09071a 80%)", zIndex: 1 }} />
        <div className="grid grid-cols-3 gap-3 opacity-30 pointer-events-none px-4">
          {["Code Explanation", "Essay Writing", "Data Analysis", "Creative Ideas", "Business Plan", "Content Writing"].map((t) => (
            <div key={t} className="rounded-xl p-3 text-left text-xs text-gray-400"
              style={{ background: "#1a1535", border: "1px solid #2a2250" }}>
              <div className="w-4 h-4 rounded mb-2" style={{ background: "#7c3aed" }} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
