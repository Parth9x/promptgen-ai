import { useState, useRef, useEffect } from "react";
import { Sparkles, Copy, Download, Check, AlertCircle } from "lucide-react";

const PURPOSES = [
  "Education", "Coding", "Research", "Business", "Marketing",
  "Content Writing", "Assignment", "Resume", "Interview Preparation",
  "Startup Ideas", "YouTube Script", "Social Media", "AI Image Generation",
];

const TONES = ["Professional", "Casual", "Academic", "Technical", "Creative", "Persuasive"];

const complexityLabel = (val) => {
  if (val <= 3) return "Basic";
  if (val <= 6) return "Intermediate";
  if (val <= 8) return "Advanced";
  return "Expert";
};

const complexityColor = (val) => {
  if (val <= 3) return "#10b981";
  if (val <= 6) return "#f59e0b";
  if (val <= 8) return "#8b5cf6";
  return "#ef4444";
};

export default function Generator({ initialData }) {
  const [form, setForm] = useState({
    topic: initialData?.topic || "",
    description: "",
    complexity: 6,
    purpose: initialData?.purpose || "Education",
    tone: "Professional",
    additionalInstructions: "",
  });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const pct = ((form.complexity - 1) / 9) * 100;
      sliderRef.current.style.setProperty("--progress", `${pct}%`);
    }
  }, [form.complexity]);

  const handleGenerate = async () => {
    if (!form.topic.trim()) {
      setError("Please enter a topic.");
      return;
    }
    setError("");
    setLoading(true);
    setOutput("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate");
      setOutput(data.prompt);
    } catch (e) {
      setError(e.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `prompt-${form.topic.toLowerCase().replace(/\s+/g, "-")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="generator" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Prompt Generator</h2>
        <p className="text-gray-400 text-lg">Craft powerful prompts tailored to your needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left — Inputs */}
        <div className="rounded-2xl p-6 md:p-8 glow-border"
          style={{ background: "#120f2a" }}>

          {/* Topic */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Topic</label>
            <input
              type="text"
              placeholder="Enter your topic..."
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              style={{ background: "#1a1535", border: "1px solid #2a2250" }}
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Short Description</label>
            <textarea
              placeholder="Describe what you need..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              style={{ background: "#1a1535", border: "1px solid #2a2250" }}
            />
          </div>

          {/* Complexity */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-3">
              Complexity:{" "}
              <span style={{ color: complexityColor(form.complexity) }}>
                {complexityLabel(form.complexity)}
              </span>
            </label>
            <input
              ref={sliderRef}
              type="range"
              min="1"
              max="10"
              value={form.complexity}
              onChange={(e) => setForm({ ...form, complexity: Number(e.target.value) })}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Basic</span>
              <span>Expert</span>
            </div>
          </div>

          {/* Purpose */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Purpose</label>
            <select
              value={form.purpose}
              onChange={(e) => setForm({ ...form, purpose: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white outline-none focus:ring-2 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
              style={{ background: "#1a1535", border: "1px solid #2a2250" }}>
              {PURPOSES.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Tone */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-3">Tone</label>
            <div className="flex flex-wrap gap-2">
              {TONES.map((t) => (
                <button
                  key={t}
                  onClick={() => setForm({ ...form, tone: t })}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={form.tone === t
                    ? { background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#fff", border: "1px solid #7c3aed" }
                    : { background: "#1a1535", color: "#9ca3af", border: "1px solid #2a2250" }}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Instructions */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-2">Additional Instructions</label>
            <textarea
              placeholder="Any specific requirements..."
              value={form.additionalInstructions}
              onChange={(e) => setForm({ ...form, additionalInstructions: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              style={{ background: "#1a1535", border: "1px solid #2a2250" }}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 text-red-400 text-sm mb-4 p-3 rounded-lg"
              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", boxShadow: "0 0 24px rgba(124,58,237,0.4)" }}>
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={18} />
                Generate Prompt
              </>
            )}
          </button>
        </div>

        {/* Right — Output */}
        <div className="rounded-2xl p-6 md:p-8 glow-border flex flex-col"
          style={{ background: "#120f2a", minHeight: "500px" }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-lg">Generated Prompt</h3>
            {output && (
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  title="Copy"
                  className="p-2 rounded-lg transition-all hover:bg-white/10"
                  style={{ border: "1px solid #2a2250" }}>
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
                </button>
                <button
                  onClick={handleDownload}
                  title="Download"
                  className="p-2 rounded-lg transition-all hover:bg-white/10"
                  style={{ border: "1px solid #2a2250" }}>
                  <Download size={16} className="text-gray-400" />
                </button>
              </div>
            )}
          </div>

          <div className="flex-1 rounded-xl p-5 relative overflow-auto"
            style={{ background: "#0d0b1e", border: "1px solid #1e1a40" }}>
            {!output && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <Sparkles size={40} className="text-gray-700 mb-4 animate-float" />
                <p className="text-gray-600 text-sm">Your generated prompt will appear here</p>
              </div>
            )}
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="relative w-12 h-12">
                  <div className="w-12 h-12 border-2 border-purple-500/20 rounded-full" />
                  <div className="absolute inset-0 w-12 h-12 border-2 border-transparent border-t-purple-500 rounded-full animate-spin" />
                </div>
                <p className="text-gray-500 text-sm">Crafting your perfect prompt...</p>
              </div>
            )}
            {output && (
              <p className="text-gray-200 leading-relaxed text-sm whitespace-pre-wrap animate-fade-in">
                {output}
              </p>
            )}
          </div>

          {output && (
            <button
              onClick={handleCopy}
              className="mt-4 w-full py-3 rounded-xl font-medium text-white text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
              style={{ background: copied ? "rgba(16,185,129,0.2)" : "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }}>
              {copied ? <><Check size={16} className="text-green-400" /> Copied!</> : <><Copy size={16} /> Copy to Clipboard</>}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
