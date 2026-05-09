import { PenLine, SlidersHorizontal, Sparkles, Download } from "lucide-react";

const steps = [
  { icon: PenLine, num: 1, title: "Enter Your Topic", desc: "Describe what you need help with and provide relevant context" },
  { icon: SlidersHorizontal, num: 2, title: "Customize Parameters", desc: "Set complexity, tone, purpose, and any additional requirements" },
  { icon: Sparkles, num: 3, title: "Generate Prompt", desc: "Our AI creates an optimized prompt tailored to your needs" },
  { icon: Download, num: 4, title: "Copy & Use", desc: "Use your generated prompt with any AI assistant or save for later" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-gray-400 text-lg">Four simple steps to perfect AI prompts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {/* connecting line on desktop */}
        <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
          style={{ background: "linear-gradient(to right, transparent, #7c3aed, #7c3aed, transparent)" }} />

        {steps.map(({ icon: Icon, num, title, desc }) => (
          <div key={num} className="rounded-2xl p-6 text-center relative card-hover glow-border"
            style={{ background: "#120f2a" }}>
            {/* Number badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white z-10"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
              {num}
            </div>

            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mt-4 mb-5"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.2)" }}>
              <Icon size={24} className="text-purple-400" />
            </div>

            <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
