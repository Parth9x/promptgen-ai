import { Code2, BookOpen, Briefcase, Lightbulb, BarChart3, PenTool, ArrowRight } from "lucide-react";

const templates = [
  { icon: Code2, color: "#38bdf8", bg: "linear-gradient(135deg,#0ea5e9,#6366f1)", label: "Development", title: "Code Explanation", desc: "Get detailed explanations for complex code snippets", topic: "Code Explanation", purpose: "Coding" },
  { icon: BookOpen, color: "#ec4899", bg: "linear-gradient(135deg,#ec4899,#8b5cf6)", label: "Education", title: "Essay Writing", desc: "Generate structured essay outlines and content", topic: "Essay Writing", purpose: "Education" },
  { icon: Briefcase, color: "#10b981", bg: "linear-gradient(135deg,#10b981,#3b82f6)", label: "Business", title: "Business Plan", desc: "Create comprehensive business planning prompts", topic: "Business Plan", purpose: "Business" },
  { icon: Lightbulb, color: "#f59e0b", bg: "linear-gradient(135deg,#f59e0b,#ef4444)", label: "Creative", title: "Creative Ideas", desc: "Brainstorm innovative concepts and solutions", topic: "Creative Ideas", purpose: "Content Writing" },
  { icon: BarChart3, color: "#a78bfa", bg: "linear-gradient(135deg,#8b5cf6,#3b82f6)", label: "Research", title: "Data Analysis", desc: "Analyze datasets and extract insights", topic: "Data Analysis", purpose: "Research" },
  { icon: PenTool, color: "#f43f5e", bg: "linear-gradient(135deg,#f43f5e,#ec4899)", label: "Marketing", title: "Content Writing", desc: "Craft engaging content for various platforms", topic: "Content Writing", purpose: "Marketing" },
];

export default function Templates({ onUseTemplate }) {
  return (
    <section id="templates" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Prompt Templates</h2>
        <p className="text-gray-400 text-lg">Start with pre-built templates for common use cases</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {templates.map(({ icon: Icon, color, bg, label, title, desc, topic, purpose }) => (
          <div key={title}
            className="rounded-2xl p-6 card-hover glow-border group"
            style={{ background: "#120f2a" }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs text-gray-400 px-2 py-1 rounded-full"
                style={{ background: "#1a1535", border: "1px solid #2a2250" }}>
                {label}
              </span>
              <div className="ml-auto w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: bg }}>
                <Icon size={22} className="text-white" />
              </div>
            </div>

            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">{desc}</p>

            <button
              onClick={() => onUseTemplate({ topic, purpose })}
              className="flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group-hover:gap-2">
              Use Template <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
