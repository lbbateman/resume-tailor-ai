"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export function TailorForm() {
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState("");

  const handleTailor = async () => {
    const res = await fetch("/api/tailor", {
      method: "POST",
      body: JSON.stringify({ resumeText, jobDesc }),
    });
    const data = await res.json();
    setResult(data.tailored);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="font-medium">📄 Resume (paste text for now)</label>
        <Textarea
          rows={8}
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Paste your resume text here..."
        />
      </div>

      <div>
        <label className="font-medium">🧾 Job Description</label>
        <Textarea
          rows={8}
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          placeholder="Paste the job description here..."
        />
      </div>

      <Button onClick={handleTailor} className="w-full">
        ✨ Tailor Resume
      </Button>

      {result && (
        <div className="mt-6 border rounded-xl p-4 bg-muted text-muted-foreground">
          <h3 className="text-lg font-semibold mb-2">🎉 Tailored Resume:</h3>
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </div>
  );
}
