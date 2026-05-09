import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-4 text-center" style={{ borderTop: "1px solid #1e1a40" }}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
          <Sparkles size={14} className="text-white" />
        </div>
        <span className="font-bold text-white text-sm">PromptGen AI</span>
      </div>

      <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
        Created with <Heart size={13} className="text-pink-500 fill-pink-500" /> by{" "}
        <span className="text-purple-400 font-medium">Parth Kulshrestha</span>
      </p>

      <p className="text-gray-600 text-xs mt-2">
        Hope you like it &mdash; © 2026 PromptGen AI
      </p>
    </footer>
  );
}
