import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { resumeText, jobDesc } = await req.json();

  const prompt = `
You are a helpful AI assistant that tailors resumes to specific job descriptions.
Rewrite the following resume so it aligns with the job description, using concise and relevant language.
Keep the original format and structure as much as possible.

Resume:
${resumeText}

Job Description:
${jobDesc}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  const tailored = completion.choices[0].message.content;

  return NextResponse.json({ tailored });
}
