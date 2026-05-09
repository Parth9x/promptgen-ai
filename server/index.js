import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const complexityLabel = (val) => {
  if (val <= 3) return "beginner-friendly, simple, and concise";
  if (val <= 6) return "intermediate, structured with examples and context";
  return "expert-level, detailed, chain-of-thought style with constraints and deep context";
};

app.post("/api/generate", async (req, res) => {
  const { topic, description, complexity, purpose, tone, additionalInstructions } = req.body;

  if (!topic) return res.status(400).json({ error: "Topic is required" });

  const metaPrompt = `You are an expert prompt engineer. Generate a highly optimized AI prompt based on these parameters:

Topic: ${topic}
Description: ${description || "Not provided"}
Complexity Level: ${complexity}/10 (${complexityLabel(complexity)})
Purpose: ${purpose}
Tone: ${tone}
Additional Instructions: ${additionalInstructions || "None"}

Rules:
- Output ONLY the final optimized prompt, nothing else
- No explanations, no meta-commentary, no quotes around it
- The prompt should be ready to paste directly into any AI assistant
- Match the complexity level strictly: level 1-3 means short and simple, 4-6 means structured and detailed, 7-10 means expert with role-play, constraints, and formatting instructions
- Tone must match: ${tone}
- Purpose is: ${purpose}

Generate the optimized prompt now:`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: metaPrompt }],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Groq API error");
    }

    const text = data.choices[0].message.content.trim();
    res.json({ prompt: text });
  } catch (err) {
    const msg = err?.message || String(err);
    console.error("Groq error:", msg);
    res.status(500).json({ error: msg });
  }
});

app.get("/api/health", (_, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
