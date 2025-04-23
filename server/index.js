import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello world from the API")
})

app.post("/generate", async (req, res)=>{
    const prompt = req.body.prompt;
    try{
        const medicine = await generate(prompt);
        res.json({response: medicine})
    } catch (error){
        console.error(error);
        res.status(500).send("Internal server error")
    }
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})