import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ background: "rgba(9,7,26,0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(139,92,246,0.12)" }}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
          <Sparkles size={16} className="text-white" />
        </div>
        <span className="font-bold text-white text-sm">PromptGen AI</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {["Features", "How It Works", "Templates"].map((item) => (
          <a key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-sm text-gray-400 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>

      <a href="#generator"
        className="text-sm font-medium px-4 py-2 rounded-lg text-white transition-all"
        style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
        Start Generating
      </a>
    </nav>
  );
}
