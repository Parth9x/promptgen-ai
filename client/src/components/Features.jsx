import { TrendingDown, Target, Brain, BarChart2, ShieldCheck, Rocket } from "lucide-react";

const features = [
  {
    icon: TrendingDown, color: "#10b981", bg: "#064e3b",
    title: "60% Token Reduction",
    metric: "↓ 60% avg token spend",
    desc: "Precision-engineered prompts get the right output first try, eliminating expensive re-prompting cycles.",
  },
  {
    icon: Target, color: "#ec4899", bg: "#831843",
    title: "First-Try Accuracy",
    metric: "↓ 42% re-prompt rate",
    desc: "Tailor complexity, tone, and purpose so the AI understands exactly what you need — no guessing.",
  },
  {
    icon: Brain, color: "#38bdf8", bg: "#075985",
    title: "Output Consistency",
    metric: "98% quality score avg",
    desc: "Structured prompt templates ensure consistent, high-quality outputs across every use case.",
  },
  {
    icon: BarChart2, color: "#a78bfa", bg: "#4c1d95",
    title: "Prompt Quality Score",
    metric: "Live scoring per prompt",
    desc: "Every generated prompt is scored for clarity, context depth, and optimization effectiveness.",
  },
  {
    icon: ShieldCheck, color: "#f59e0b", bg: "#78350f",
    title: "Model Optimization",
    metric: "Tuned for all major LLMs",
    desc: "Prompts are engineered to match how GPT-4, Claude, and Gemini process instructions internally.",
  },
  {
    icon: Rocket, color: "#f43f5e", bg: "#881337",
    title: "Productivity ROI",
    metric: "~3hrs saved per week",
    desc: "Eliminate manual prompt iteration. What took 10 tries now takes 1 — measurable time back.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">Why It Works</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Measurable Results</h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Not just a generator — an optimization platform with metrics that matter to teams and developers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, color, bg, title, metric, desc }) => (
          <div key={title} className="rounded-2xl p-6 card-hover glow-border" style={{ background: "#120f2a" }}>
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${bg}40` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{ background: `${bg}30`, color, border: `1px solid ${color}30` }}>
                {metric}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
