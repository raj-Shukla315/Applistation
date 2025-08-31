const multer = require("multer");
const pdfParse = require("pdf-parse");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const upload = multer({ storage: multer.memoryStorage() });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const atscheck = async (req, res) => {
  try {
    const resumebuffer = req.file.buffer;
    const jdText = req.body.jd;

    const resumeData = await pdfParse(resumebuffer);
    const resumeText = resumeData.text;

    const prompt = `
You are an ATS (Applicant Tracking System) evaluator.
Analyze the following resume against the provided Job Description (JD) and return:

1. ATS Score (out of 100)
2. Key Strengths
3. Weaknesses / Missing Keywords
4. Suggestions for Improvement
5. Grammar & Formatting Feedback

Resume:
${resumeText}

Job Description:
${jdText}

Format your answer in JSON with keys: ats_score, strengths, weaknesses, suggestions, grammar_feedback.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    let feedbackText = result.response.text();
    feedbackText = feedbackText.replace(/```json|```/g, "").trim();
    const feedback = JSON.parse(feedbackText);
    res.json({ success: true, feedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "ATS check failed." });
  }
};

module.exports = { atscheck , upload };
