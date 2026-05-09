const reviews = [
  { initials: "SJ", name: "Sarah Johnson", role: "Content Creator", text: "This tool has completely transformed how I work with AI. The prompts are always on point and save me hours of trial and error." },
  { initials: "MC", name: "Michael Chen", role: "Software Engineer", text: "As a developer, I use this daily for code documentation and technical writing. The complexity slider is a game-changer." },
  { initials: "ER", name: "Emily Rodriguez", role: "Marketing Manager", text: "The tone customization features are incredible. I can generate prompts for different audiences with perfect precision." },
  { initials: "DP", name: "David Park", role: "PhD Student", text: "Perfect for academic research. The academic tone option produces exactly what I need for my dissertation work." },
  { initials: "LA", name: "Lisa Anderson", role: "Business Consultant", text: "The business templates are fantastic. I've used this for client proposals and strategic planning with great results." },
  { initials: "JW", name: "James Wilson", role: "Creative Writer", text: "Finally, a tool that understands creative writing needs. The prompts help me break through writer's block consistently." },
];

const avatarColors = ["#7c3aed", "#4f46e5", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899"];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Users Say</h2>
        <p className="text-gray-400 text-lg">Trusted by thousands of professionals worldwide</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map(({ initials, name, role, text }, i) => (
          <div key={name}
            className="rounded-2xl p-6 card-hover glow-border"
            style={{ background: "#120f2a" }}>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
                style={{ background: avatarColors[i % avatarColors.length] }}>
                {initials}
              </div>
              <div>
                <p className="text-white font-medium text-sm">{name}</p>
                <p className="text-gray-500 text-xs">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
