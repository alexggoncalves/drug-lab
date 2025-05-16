import MedicineLab from "./MedicineLab/MedicineLab"

const Body = () =>{
    // const [prompt, setPrompt] = useState("");
    // const [result, setResult] = useState({});

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("effect submited: ", prompt);

    //     const result = await generateMedicine(prompt);
    //     setResult(result);
    //     console.log(result);
    // };

    // const generateMedicine = async () => {
    //     const response = await fetch("http://localhost:3005/generate", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ prompt: prompt }),
    //     });

    //     const data = await response.json();

    //     return data.response;
    // };

    return (
        <div className="body-container">
            <MedicineLab></MedicineLab>
        </div>
    )
}

export default Body