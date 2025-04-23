import {Configuration, OpenAIApi} from "openai/index.mjs" 
import dotenv from "dotenv"
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY

// Check if the API key is set in the dotenv file
// Throw an error and close backend in case it is not
if(!openaiApiKey) {
    console.error('OPENAI_API_KEY is not set');
    process.exit();
}

// Create the configuration object for the API access
const configuration = new Configuration({
    apiKey: openaiApiKey,

});

const openai = new OpenAIApi(Configuration);

export default openai;