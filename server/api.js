import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

// Check if the API key is set
if (!openaiApiKey) {
  console.error('OPENAI_API_KEY is not set');
  process.exit();
}

// Create the OpenAI instance
const openai = new OpenAI({
  apiKey: openaiApiKey
});

export default openai;