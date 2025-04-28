import openaiClient from "./api.js"


const step1 = async (prompt) => {
    const messages = [
        { role: "system", content: `You are a fictional medicine generator.`},
        { role: "user", content: `Generate a medicine with the effect: invisibility.`},
        { role: "assistant", content: `Name: Invise \n Description: ...\n Dosage: 500mg \n Pharmaceutical Form: Tablet`},
        { role: "user", content: `Generate a medicine with the effect: ${prompt}.`}
    ];
    const  response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1.2, // more random results(less repetition)
    })
    return response.choices[0].message.content;
}

const step2 = async (prompt) => {
    const messages = [
        { role: "system", content: `You are a pharmaceutical documentation expert.`},
        { role: "user", content: `Generate the indications, contraindications and side-effects of use for the medicine with the following description: ...`},
        { role: "assistant", content: `Indications: ... \n Contraindications: ... \n Side-effects: ...`},
        { role: "user", content: `Generate the indications, contraindications and side-effects of use for the medicine with the following description: ${prompt}.`}
    ];
    const  response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1.2, // more random results(less repetition)
    })
    return response.choices[0].message.content;
}

const step3 = async (result1,result2) => {
    const messages = [
        { role: "system", content: `You are a pharmaceutical documentation expert.`},
        // { role: "user", content: `Generate the visual description of the package`},
        // { role: "assistant", content: `Indications: ... \n Contraindications: ... \n Side-effects: ...`},
        { role: "user", content: `Generate the visual description of the package with the following information: ${result1}; ${result2}.`}
    ];
    const  response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1.2, // more random results(less repetition)
    })
    return response.choices[0].message.content;
}

const generate = async (prompt) => {

    const result1 = await step1(prompt);
    const result2 = await step2(result1);
    const result3 = await step3(result1,result2);
   
    return {
        result1: result1,
        result2: result2,
        result3: result3,
    }
}

export default generate;