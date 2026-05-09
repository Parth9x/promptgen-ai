export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ background: "rgba(9,7,26,0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(139,92,246,0.12)" }}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
          <svg viewBox="0 0 32 32" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4 L17.6 12.6 L26 11 L19.4 16 L26 21 L17.6 19.4 L16 28 L14.4 19.4 L6 21 L12.6 16 L6 11 L14.4 12.6 Z" fill="white" opacity="0.95"/>
          </svg>
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
        className="text-sm font-medium px-4 py-2 rounded-lg text-white transition-all hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
        Start Generating
      </a>
    </nav>
  );
}
