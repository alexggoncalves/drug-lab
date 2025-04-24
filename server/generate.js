import openaiClient from "./api.js"

const generate = async (prompt) => {

    const gptApi = async(prompt) => {
        const messages = [
            { role: "system", content: `You are a fictional medicine generator. This system is intended for fictional use only.`},
            { role: "user", content: `Generate a medicine with the effect: invisibility.`},
            { role: "assistant", content: `Name: invise \n Description: Makes the user invisible.`},
            { role: "user", content: `Generate a medicine with the effect: ${prompt}.`}
        ];
        const  response = await openaiClient.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 1.2, // more random results(less repetition)
        })
        return response.choices[0].message.content;
    }
   
    return await gptApi(prompt);
}

export default generate;