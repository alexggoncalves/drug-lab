import express from "express";
import cors from "cors";
import generateMedicine from "./generate.js";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello world from the API")
})

app.post("/generate", async (req, res)=>{
    const emotion = req.body.emotion;
    const emotionIntensity = req.body.emotionIntensity
    try{
        const medicine = await generateMedicine(emotion,emotionIntensity);
        res.json({response: medicine})
    } catch (error){
        console.error(error);
        res.status(500).send("Internal server error")
    }
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})