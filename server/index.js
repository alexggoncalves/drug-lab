import express from "express";
import cors from "cors";
import generateMedicine from "./generate.js";
import generateForecast from "./forecast.js"

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.post("/generate", async (req, res)=>{
    const emotion = req.body.emotion;
    const emotionIntensity = req.body.emotionIntensity
    const extraSymptoms = req.body.extraSymptoms
    
    try{
        const medicine = await generateMedicine(emotion,emotionIntensity,extraSymptoms);
        res.json({response: medicine})
    } catch (error){
        console.error(error);
        res.status(500).send("Internal server error")
    }
})

app.post("/forecast", async (req, res)=>{
    const name = req.body.name;
    const effect = req.body.effect
    const form = req.body.form
    const sideEffects = req.body.sideEffects
    const description = req.body.description
    const intensity = req.body.intensity
    const dayPlans = req.body.dayPlans
    
    try{
        const forecast = await generateForecast(name,effect,form,sideEffects,description,intensity,dayPlans);
        res.json({response: forecast})
    } catch (error){
        console.error(error);
        res.status(500).send("Internal server error")
    }
}) 

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})