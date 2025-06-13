import openaiClient from "./api.js";

const generateNameAndEffect = async (
    emotion,
    emotionIntensity,
    extraSymptoms
) => {
    const hasExtras = extraSymptoms && extraSymptoms.trim() !== "";

    const messages = [
        {
            role: "system",
            content: `You are a fictional emotional medicine generator. Your job is to create medicines that INTENSIFY or AMPLIFY a given emotion, whether positive or negative. Do NOT try to relieve or treat the emotion—your role is to strengthen it. Consider that the emotion to be augmented can come with modifiers like: mildly or very.`,
        },
        {
            role: "user",
            content: `Generate a medicine with the effect of augmenting the following emotion: happiness${
                !hasExtras
                    ? ""
                    : " and to help with the following symptoms: acne"
            }.`,
        },
        {
            role: "assistant",
            content: `${
                !hasExtras
                    ? "Name: Euphorel\nEffects: Happiness"
                    : "Name: Euphorel Clear\nEffects: Happiness while reducing acne symptoms"
            }`,
        },
        {
            role: "user",
            content: `Generate a medicine with the effect of augmenting the following emotion: ${emotionIntensity} ${emotion}${
                hasExtras
                    ? " and to help with the following symptoms: " +
                      extraSymptoms
                    : ""
            }.`,
        },
    ];

    const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1.2,
    });

    return response.choices[0].message.content;
};

const generateDescription = async (name, effects) => {
    const messages = [
        {
            role: "system",
            content: `You are a pharmaceutical documentation expert. Generate a description of not more than 500 character`,
        },
        {
            role: "user",
            content: `Generate a description for a medicine with the name: Euphorel, and effects: happiness`,
        },
        {
            role: "assistant",
            content: `Euphorel is a fast-acting mood-enhancement supplement crafted to boost dopamine and serotonin activity.`,
        },
        {
            role: "user",
            content: `Generate a description for a medicine with the name: ${name}, and effects: ${effects}`,
        },
    ];
    const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1.2, // more random results(less repetition)
    });
    return response.choices[0].message.content;
};

const generateFormAndSideEffects = async (name, effects, description) => {
    const messages = [
        {
            role: "system",
            content: `You are a pharmaceutical documentation expert.`,
        },
        {
            role: "user",
            content: `Generate a form and side effects for the medicine with the following name: Alurexa, effects: Happiness and description: Alurexa is formulated to amplify sensations of happiness and emotional well-being, particularly in individuals experiencing mild to moderate anhedonia or mood flatness.`,
        },
        {
            role: "assistant",
            content: `Form: Capsule \n Side effects: Mild euphoria or giggliness `,
        },
        {
            role: "user",
            content: `Generate a form and side effects for the medicine with the following name: ${name}, effect: ${effects}, and description: ${description}`,
        },
    ];
    const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1.2, // more random results(less repetition)
    });
    return response.choices[0].message.content;
};

const generateMedicine = async (emotion, emotionIntensity, extraSymptoms) => {
    // GENERATE THE NAME AND EFFECTS
    const nameAndEffect = await generateNameAndEffect(
        emotion,
        emotionIntensity,
        extraSymptoms
    );

    const nameMatch = nameAndEffect.match(/Name:\s*(.*?)\s*Effects:/);
    const effectMatch = nameAndEffect.match(/Effects:\s*(.*)/);
    const name = nameMatch ? nameMatch[1] : "";
    const effects = effectMatch ? effectMatch[1] : "";

    // GENERATE DESCRIPTION
    const description = await generateDescription(name, effects);

    // GENERATE THE FORM AND SIDE EFFECTS
    const formAndSideEffects = await generateFormAndSideEffects(
        name,
        effects,
        description
    );

    const formMatch = formAndSideEffects.match(/Form:\s*(.*?)\s*Side effects:/);
    const sideEffectsMatch = formAndSideEffects.match(/Side effects:\s*(.*)/);
    const form = formMatch ? formMatch[1] : "";
    const sideEffects = sideEffectsMatch ? sideEffectsMatch[1] : "";

    return {
        name: name,
        emotion:emotion,
        effects: effects,
        description: description,
        form: form,
        sideEffects: sideEffects,
    };
};

export default generateMedicine;
