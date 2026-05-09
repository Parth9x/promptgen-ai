import { Zap, Target, Brain, Palette, Shield, Rocket } from "lucide-react";

const features = [
  { icon: Zap, color: "#f59e0b", bg: "#78350f", title: "Lightning Fast", desc: "Generate optimized prompts in seconds with our advanced AI engine" },
  { icon: Target, color: "#ec4899", bg: "#831843", title: "Precision Targeting", desc: "Tailor prompts to your specific use case and desired complexity level" },
  { icon: Brain, color: "#38bdf8", bg: "#075985", title: "AI-Powered Intelligence", desc: "Leverages cutting-edge language models for superior prompt quality" },
  { icon: Palette, color: "#a78bfa", bg: "#4c1d95", title: "Multiple Tones", desc: "Choose from professional, casual, academic, and more tone options" },
  { icon: Shield, color: "#10b981", bg: "#064e3b", title: "Quality Assured", desc: "Every prompt is optimized for clarity, context, and effectiveness" },
  { icon: Rocket, color: "#f43f5e", bg: "#881337", title: "Boost Productivity", desc: "Save hours of manual prompt engineering and focus on what matters" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Powerful Features</h2>
        <p className="text-gray-400 text-lg">Everything you need to create perfect AI prompts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, color, bg, title, desc }) => (
          <div key={title}
            className="rounded-2xl p-6 card-hover glow-border"
            style={{ background: "#120f2a" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: `${bg}40` }}>
              <Icon size={24} style={{ color }} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
