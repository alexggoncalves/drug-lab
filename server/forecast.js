import openaiClient from "./api.js";

const generateDayForecast = async (
    name,
    effect,
    form,
    sideEffects,
    description,
    intensity,
    dayPlans
) => {
    

    const messages = [
        {
            role: "system",
            content: `You are an emotional forecasting assistant. 
                      Your role is to write a text how the user's day will unfold under the influence of a fictional emotional medicine. Speak to the user directly. 
                      The medicine's effects should shape the day and not be treated as something to resist or combat. 
                      Write just the body of the text and keep it under 150 words`,
        },
        {
            role: "user",
            content: `Here is the emotional medicine the user is currently under:\n
                    - Name: ${name}
                    - Effect: ${effect}
                    - Form: ${form}
                    - Side Effects: ${sideEffects}
                    - Description: ${description}
                    - Intensity: ${intensity}/3`,
        },
        {
            role: "assistant",
            content: `Now tell me what the user has planned for the day so I can create a forecast.`,
        },
        {
            role: "user",
            content: `Here are the user's plans for today:\n${dayPlans}`,
        },
    ];

    const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1.2,
    });

    return response.choices[0].message.content;
};

const generateForecast = async (
    name,
    effect,
    form,
    sideEffects,
    description,
    intensity,
    dayPlans
) => {
    // GENERATE THE NAME AND EFFECTS
    const forecast = await generateDayForecast(
        name,
        effect,
        form,
        sideEffects,
        description,
        intensity,
        dayPlans
    );

    return {
        forecast: forecast,
    };
};

export default generateForecast;
