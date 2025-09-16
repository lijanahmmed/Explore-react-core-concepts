import { useState } from "react"

export default function Batsman() {
    const [run, setRun] = useState(0);
    const [six, setSix] = useState(0);

    const handleSingle = () => {
        const newRun = run + 1
        setRun(newRun)
    }
    const handleFour = () => {
        const newRun = run + 4;
        setRun(newRun)
    }
    const handleSix = () => {
        const countSix = six + 1;
        const newRun = run + 6;
        setSix(countSix)
        setRun(newRun)
    }

    return (
        <div className="student">
            <h3>Batsman</h3>
            <h4>Run : {run}</h4>
            <h5>Six : {six}</h5>
            {
                run >= 50 && <p>Batsman got 50 runs</p>
            }
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}