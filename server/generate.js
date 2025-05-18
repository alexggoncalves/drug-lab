import openaiClient from "./api.js";

const step1 = async (emotion, emotionIntensity) => {
    const messages = [
        {
            role: "system",
            content: `You are a fictional emotional medicine generator. Consider the emotion that will be potentiated can come with the modifiers: mildly and very`,
        },
        {
            role: "user",
            content: `Generate a medicine with the effect of potentiating the following emotion: happiness.`,
        },
        {
            role: "assistant",
            content: `Name: Alurexa \n Description: Alurexa is formulated to amplify sensations of happiness and emotional well-being, particularly in individuals experiencing mild to moderate anhedonia or mood flatness.`,
        },
        {
            role: "user",
            content: `Generate a medicine with the effect: ${
                emotionIntensity + " " + emotion
            }.`,
        },
    ];
    const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1.2, // more random results(less repetition)
    });
    return response.choices[0].message.content;
};

const step2 = async (name, description) => {
    const messages = [
        {
            role: "system",
            content: `You are a pharmaceutical documentation expert.`,
        },
        {
            role: "user",
            content: `Generate a form and side effects for the medicine with the following name: Alurexa, and description: Alurexa is formulated to amplify sensations of happiness and emotional well-being, particularly in individuals experiencing mild to moderate anhedonia or mood flatness.`,
        },
        {
            role: "assistant",
            content: `Form: Capsule \n Side effects: Mild euphoria or giggliness `,
        },
        {
            role: "user",
            content: `Generate a form and side effects for the medicine with the following name: ${name}, , and description: ${description}`,
        },
    ];
    const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1.2, // more random results(less repetition)
    });
    return response.choices[0].message.content;
};

const generateMedicine = async (emotion, emotionIntensity) => {
    const nameAndDescription = await step1(emotion, emotionIntensity);

    const nameMatch = nameAndDescription.match(/Name:\s*(.*?)\s*Description:/);
    const descriptionMatch = nameAndDescription.match(/Description:\s*(.*)/);
    const name = nameMatch ? nameMatch[1] : "";
    const description = descriptionMatch ? descriptionMatch[1] : "";

    const formAndSideEffects = await step2(name, description);

    const formMatch = formAndSideEffects.match(/Form:\s*(.*?)\s*Side effects:/);
    const sideEffectsMatch = formAndSideEffects.match(/Side effects:\s*(.*)/);
    const form = formMatch ? formMatch[1] : "";
    const sideEffects = sideEffectsMatch ? sideEffectsMatch[1] : "";
    
    return {
        name: name,
        description: description,
        form: form,
        sideEffects: sideEffects
    };
};

export default generateMedicine;
